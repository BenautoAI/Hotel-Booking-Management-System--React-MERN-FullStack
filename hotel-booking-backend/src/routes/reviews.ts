import express, { Request, Response } from "express";
import Review from "../models/review";
import Hotel from "../models/hotel";
import Booking from "../models/booking";
import User from "../models/user";
import verifyToken from "../middleware/auth";
import { body, param, validationResult } from "express-validator";

const router = express.Router();

// Helper function to update hotel rating
const updateHotelRating = async (hotelId: string) => {
  try {
    const reviews = await Review.find({ hotelId });
    
    if (reviews.length === 0) {
      await Hotel.findByIdAndUpdate(hotelId, {
        averageRating: 0,
        reviewCount: 0,
      });
      return;
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    await Hotel.findByIdAndUpdate(hotelId, {
      averageRating: Math.round(averageRating * 10) / 10, // Round to 1 decimal
      reviewCount: reviews.length,
    });
  } catch (error) {
    console.error("Error updating hotel rating:", error);
    throw error;
  }
};

// Create new review
router.post(
  "/",
  verifyToken,
  [
    body("hotelId").notEmpty().withMessage("Hotel ID is required"),
    body("bookingId").notEmpty().withMessage("Booking ID is required"),
    body("rating").isInt({ min: 1, max: 5 }).withMessage("Rating must be between 1 and 5"),
    body("comment")
      .isLength({ min: 50, max: 2000 })
      .withMessage("Comment must be between 50 and 2000 characters"),
    body("categories.cleanliness")
      .isInt({ min: 1, max: 5 })
      .withMessage("Cleanliness rating must be between 1 and 5"),
    body("categories.service")
      .isInt({ min: 1, max: 5 })
      .withMessage("Service rating must be between 1 and 5"),
    body("categories.location")
      .isInt({ min: 1, max: 5 })
      .withMessage("Location rating must be between 1 and 5"),
    body("categories.value")
      .isInt({ min: 1, max: 5 })
      .withMessage("Value rating must be between 1 and 5"),
    body("categories.amenities")
      .isInt({ min: 1, max: 5 })
      .withMessage("Amenities rating must be between 1 and 5"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { hotelId, bookingId, rating, comment, categories } = req.body;
      const userId = req.userId;

      // Verify booking exists and belongs to user
      const booking = await Booking.findOne({ _id: bookingId, userId });
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }

      // Check if booking is for the specified hotel
      if (booking.hotelId !== hotelId) {
        return res.status(400).json({ message: "Booking does not match hotel" });
      }

      // Check if checkout date has passed
      const checkoutDate = new Date(booking.checkOut);
      const currentDate = new Date();
      if (checkoutDate >= currentDate) {
        return res.status(400).json({ 
          message: "Cannot review before checkout date has passed" 
        });
      }

      // Check if review already exists for this booking
      const existingReview = await Review.findOne({ bookingId });
      if (existingReview) {
        return res.status(400).json({ 
          message: "A review already exists for this booking" 
        });
      }

      // Create new review
      const review = new Review({
        userId,
        hotelId,
        bookingId,
        rating,
        comment,
        categories,
        isVerified: true, // Always verified since it's linked to a booking
        helpfulCount: 0,
      });

      await review.save();

      // Update hotel rating
      await updateHotelRating(hotelId);

      // Populate user info before sending response
      const populatedReview = await Review.findById(review._id).populate(
        "userId",
        "firstName lastName"
      );

      res.status(201).json(populatedReview);
    } catch (error) {
      console.error("Error creating review:", error);
      res.status(500).json({ message: "Unable to create review" });
    }
  }
);

// Get all reviews for a hotel
router.get("/hotel/:hotelId", async (req: Request, res: Response) => {
  try {
    const { hotelId } = req.params;
    const { sort = "helpful", page = "1", limit = "10" } = req.query;

    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    // Determine sort criteria
    let sortCriteria: any = {};
    if (sort === "helpful") {
      sortCriteria = { helpfulCount: -1, createdAt: -1 };
    } else if (sort === "recent") {
      sortCriteria = { createdAt: -1 };
    } else {
      sortCriteria = { createdAt: -1 };
    }

    const reviews = await Review.find({ hotelId })
      .sort(sortCriteria)
      .skip(skip)
      .limit(limitNum)
      .populate("userId", "firstName lastName");

    const total = await Review.countDocuments({ hotelId });

    res.status(200).json({
      reviews,
      pagination: {
        total,
        page: pageNum,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    console.error("Error fetching hotel reviews:", error);
    res.status(500).json({ message: "Unable to fetch reviews" });
  }
});

// Get current user's reviews
router.get("/my-reviews", verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = req.userId;

    const reviews = await Review.find({ userId })
      .sort({ createdAt: -1 })
      .populate("hotelId", "name city country imageUrls");

    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching user reviews:", error);
    res.status(500).json({ message: "Unable to fetch reviews" });
  }
});

// Get eligible bookings for review
router.get(
  "/eligible-bookings",
  verifyToken,
  async (req: Request, res: Response) => {
    try {
      const userId = req.userId;
      const currentDate = new Date();

      // Find all bookings where checkout has passed
      const bookings = await Booking.find({
        userId,
        checkOut: { $lt: currentDate },
        status: { $in: ["confirmed", "completed"] },
      }).populate("hotelId", "name city country imageUrls");

      // Filter out bookings that already have reviews
      const bookingIds = bookings.map((b) => b._id.toString());
      const existingReviews = await Review.find({
        bookingId: { $in: bookingIds },
      });
      const reviewedBookingIds = new Set(
        existingReviews.map((r) => r.bookingId.toString())
      );

      const eligibleBookings = bookings.filter(
        (booking) => !reviewedBookingIds.has(booking._id.toString())
      );

      res.status(200).json(eligibleBookings);
    } catch (error) {
      console.error("Error fetching eligible bookings:", error);
      res.status(500).json({ message: "Unable to fetch eligible bookings" });
    }
  }
);

// Update review
router.put(
  "/:reviewId",
  verifyToken,
  [
    param("reviewId").notEmpty().withMessage("Review ID is required"),
    body("rating").optional().isInt({ min: 1, max: 5 }).withMessage("Rating must be between 1 and 5"),
    body("comment")
      .optional()
      .isLength({ min: 50, max: 2000 })
      .withMessage("Comment must be between 50 and 2000 characters"),
    body("categories.cleanliness")
      .optional()
      .isInt({ min: 1, max: 5 })
      .withMessage("Cleanliness rating must be between 1 and 5"),
    body("categories.service")
      .optional()
      .isInt({ min: 1, max: 5 })
      .withMessage("Service rating must be between 1 and 5"),
    body("categories.location")
      .optional()
      .isInt({ min: 1, max: 5 })
      .withMessage("Location rating must be between 1 and 5"),
    body("categories.value")
      .optional()
      .isInt({ min: 1, max: 5 })
      .withMessage("Value rating must be between 1 and 5"),
    body("categories.amenities")
      .optional()
      .isInt({ min: 1, max: 5 })
      .withMessage("Amenities rating must be between 1 and 5"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { reviewId } = req.params;
      const userId = req.userId;

      // Find review and verify ownership
      const review = await Review.findById(reviewId);
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }

      if (review.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }

      // Check if within 30-day edit window
      const reviewDate = new Date(review.createdAt);
      const currentDate = new Date();
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(currentDate.getDate() - 30);

      if (reviewDate < thirtyDaysAgo) {
        return res.status(400).json({ 
          message: "Cannot edit review after 30 days" 
        });
      }

      // Update review fields
      const { rating, comment, categories } = req.body;
      if (rating !== undefined) review.rating = rating;
      if (comment !== undefined) review.comment = comment;
      if (categories !== undefined) {
        review.categories = {
          ...review.categories,
          ...categories,
        };
      }

      review.updatedAt = new Date();
      await review.save();

      // Update hotel rating
      await updateHotelRating(review.hotelId);

      // Populate user info before sending response
      const populatedReview = await Review.findById(review._id).populate(
        "userId",
        "firstName lastName"
      );

      res.status(200).json(populatedReview);
    } catch (error) {
      console.error("Error updating review:", error);
      res.status(500).json({ message: "Unable to update review" });
    }
  }
);

// Delete review
router.delete(
  "/:reviewId",
  verifyToken,
  async (req: Request, res: Response) => {
    try {
      const { reviewId } = req.params;
      const userId = req.userId;

      // Find review and verify ownership
      const review = await Review.findById(reviewId);
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }

      if (review.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }

      const hotelId = review.hotelId;
      await Review.findByIdAndDelete(reviewId);

      // Update hotel rating
      await updateHotelRating(hotelId);

      res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
      console.error("Error deleting review:", error);
      res.status(500).json({ message: "Unable to delete review" });
    }
  }
);

// Mark review as helpful
router.post(
  "/:reviewId/helpful",
  verifyToken,
  async (req: Request, res: Response) => {
    try {
      const { reviewId } = req.params;
      const userId = req.userId;

      const review = await Review.findById(reviewId);
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }

      // Prevent users from voting for their own reviews
      if (review.userId === userId) {
        return res.status(400).json({ 
          message: "Cannot vote for your own review" 
        });
      }

      // Increment helpful count
      review.helpfulCount += 1;
      await review.save();

      res.status(200).json(review);
    } catch (error) {
      console.error("Error marking review as helpful:", error);
      res.status(500).json({ message: "Unable to mark review as helpful" });
    }
  }
);

export default router;
