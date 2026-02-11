import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { createReview, updateReview } from "../../api-client";
import { CreateReviewData, ReviewType } from "../../../../shared/types";
import RatingStars from "./RatingStars";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useToast } from "../../hooks/use-toast";
import { ChevronDown, ChevronUp } from "lucide-react";

type ReviewFormProps = {
  bookingId: string;
  hotelId: string;
  existingReview?: ReviewType;
  onSuccess?: () => void;
  onCancel?: () => void;
};

type ReviewFormData = {
  rating: number;
  comment: string;
  cleanliness: number;
  service: number;
  location: number;
  value: number;
  amenities: number;
};

const ReviewForm: React.FC<ReviewFormProps> = ({
  bookingId,
  hotelId,
  existingReview,
  onSuccess,
  onCancel,
}) => {
  const [showCategories, setShowCategories] = useState(true);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ReviewFormData>({
    defaultValues: existingReview
      ? {
          rating: existingReview.rating,
          comment: existingReview.comment,
          cleanliness: existingReview.categories.cleanliness,
          service: existingReview.categories.service,
          location: existingReview.categories.location,
          value: existingReview.categories.value,
          amenities: existingReview.categories.amenities,
        }
      : {
          rating: 0,
          comment: "",
          cleanliness: 0,
          service: 0,
          location: 0,
          value: 0,
          amenities: 0,
        },
  });

  const commentValue = watch("comment") || "";
  const ratingValue = watch("rating");
  const cleanlinessValue = watch("cleanliness");
  const serviceValue = watch("service");
  const locationValue = watch("location");
  const valueRating = watch("value");
  const amenitiesValue = watch("amenities");

  const createMutation = useMutation(createReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(["hotelReviews", hotelId]);
      queryClient.invalidateQueries("eligibleBookings");
      toast({
        title: "Success!",
        description: "Your review has been posted.",
      });
      onSuccess?.();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description:
          error.response?.data?.message ||
          "Failed to post review. Please try again.",
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation(
    (data: { reviewId: string; reviewData: CreateReviewData }) =>
      updateReview(data.reviewId, data.reviewData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["hotelReviews", hotelId]);
        toast({
          title: "Success!",
          description: "Your review has been updated.",
        });
        onSuccess?.();
      },
      onError: (error: any) => {
        toast({
          title: "Error",
          description:
            error.response?.data?.message ||
            "Failed to update review. Please try again.",
          variant: "destructive",
        });
      },
    }
  );

  const onSubmit = (data: ReviewFormData) => {
    const reviewData: CreateReviewData = {
      hotelId,
      bookingId,
      rating: data.rating,
      comment: data.comment,
      categories: {
        cleanliness: data.cleanliness,
        service: data.service,
        location: data.location,
        value: data.value,
        amenities: data.amenities,
      },
    };

    if (existingReview) {
      updateMutation.mutate({
        reviewId: existingReview._id,
        reviewData,
      });
    } else {
      createMutation.mutate(reviewData);
    }
  };

  const categoryLabels = {
    cleanliness: "Cleanliness",
    service: "Service",
    location: "Location",
    value: "Value for Money",
    amenities: "Amenities",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label className="text-lg font-semibold mb-2 block">
          Overall Rating *
        </Label>
        <div className="flex items-center gap-4">
          <RatingStars
            rating={ratingValue}
            onChange={(value) => setValue("rating", value)}
            size="lg"
            interactive={true}
          />
          <span className="text-sm text-gray-600">
            {ratingValue === 0
              ? "Select a rating"
              : `${ratingValue} out of 5 stars`}
          </span>
        </div>
        {errors.rating && (
          <p className="text-red-600 text-sm mt-1">
            Please select an overall rating
          </p>
        )}
        <input
          type="hidden"
          {...register("rating", {
            required: true,
            min: 1,
            max: 5,
            valueAsNumber: true,
          })}
        />
      </div>

      <div>
        <button
          type="button"
          onClick={() => setShowCategories(!showCategories)}
          className="flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-700 mb-3"
        >
          {showCategories ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
          Category Ratings *
        </button>

        {showCategories && (
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
            {Object.entries(categoryLabels).map(([key, label]) => {
              const fieldName = key as keyof typeof categoryLabels;
              const fieldValue =
                fieldName === "cleanliness"
                  ? cleanlinessValue
                  : fieldName === "service"
                  ? serviceValue
                  : fieldName === "location"
                  ? locationValue
                  : fieldName === "value"
                  ? valueRating
                  : amenitiesValue;

              return (
                <div key={key}>
                  <Label className="mb-2 block">{label}</Label>
                  <div className="flex items-center gap-4">
                    <RatingStars
                      rating={fieldValue}
                      onChange={(value) =>
                        setValue(fieldName as any, value)
                      }
                      size="md"
                      interactive={true}
                    />
                    <span className="text-sm text-gray-600">
                      {fieldValue === 0
                        ? "Select rating"
                        : `${fieldValue} stars`}
                    </span>
                  </div>
                  {errors[fieldName as keyof ReviewFormData] && (
                    <p className="text-red-600 text-sm mt-1">
                      Please rate {label.toLowerCase()}
                    </p>
                  )}
                  <input
                    type="hidden"
                    {...register(fieldName as any, {
                      required: true,
                      min: 1,
                      max: 5,
                      valueAsNumber: true,
                    })}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div>
        <Label htmlFor="comment" className="text-lg font-semibold mb-2 block">
          Your Review *
        </Label>
        <textarea
          id="comment"
          {...register("comment", {
            required: "Please write a review",
            minLength: {
              value: 50,
              message: "Review must be at least 50 characters",
            },
            maxLength: {
              value: 2000,
              message: "Review must not exceed 2000 characters",
            },
          })}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Share your experience at this hotel..."
        />
        <div className="flex justify-between items-center mt-2">
          <div className="text-sm text-gray-600">
            {commentValue.length} / 2000 characters
            {commentValue.length < 50 && (
              <span className="text-orange-600 ml-2">
                (Minimum 50 characters)
              </span>
            )}
          </div>
        </div>
        {errors.comment && (
          <p className="text-red-600 text-sm mt-1">{errors.comment.message}</p>
        )}
      </div>

      <div className="flex gap-3 justify-end pt-4 border-t">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          disabled={createMutation.isLoading || updateMutation.isLoading}
        >
          {createMutation.isLoading || updateMutation.isLoading
            ? "Submitting..."
            : existingReview
            ? "Update Review"
            : "Post Review"}
        </Button>
      </div>
    </form>
  );
};

export default ReviewForm;
