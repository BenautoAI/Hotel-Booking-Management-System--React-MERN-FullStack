import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchHotelReviews, markReviewHelpful } from "../../api-client";
import ReviewCard from "./ReviewCard";
import { Button } from "../ui/button";
import LoadingSpinner from "../LoadingSpinner";
import { useAppContext } from "../../contexts/AppContext";
import { useToast } from "../../hooks/use-toast";

type ReviewListProps = {
  hotelId: string;
  sortBy?: "helpful" | "recent";
};

const ReviewList: React.FC<ReviewListProps> = ({
  hotelId,
  sortBy = "helpful",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<"helpful" | "recent">(sortBy);
  const [votedReviews, setVotedReviews] = useState<Set<string>>(new Set());
  
  const { isLoggedIn } = useAppContext();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery(
    ["hotelReviews", hotelId, sortOption, currentPage],
    () =>
      fetchHotelReviews(hotelId, {
        sort: sortOption,
        page: currentPage,
        limit: 10,
      }),
    {
      keepPreviousData: true,
    }
  );

  const helpfulMutation = useMutation(markReviewHelpful, {
    onSuccess: (_, reviewId) => {
      setVotedReviews((prev) => new Set(prev).add(reviewId));
      queryClient.invalidateQueries(["hotelReviews", hotelId]);
      toast({
        title: "Thank you!",
        description: "Your vote has been recorded.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to mark review as helpful. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleHelpfulVote = (reviewId: string) => {
    if (!isLoggedIn) {
      toast({
        title: "Login required",
        description: "Please login to vote on reviews.",
        variant: "destructive",
      });
      return;
    }
    helpfulMutation.mutate(reviewId);
  };

  const handleSortChange = (newSort: "helpful" | "recent") => {
    setSortOption(newSort);
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        <p>Failed to load reviews. Please try again later.</p>
      </div>
    );
  }

  const reviews = data?.reviews || [];
  const pagination = data?.pagination;

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <p className="text-lg text-gray-600">No reviews yet</p>
        <p className="text-sm text-gray-500 mt-2">
          Be the first to share your experience!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">
          Reviews ({pagination?.total || 0})
        </h3>
        <div className="flex gap-2">
          <Button
            variant={sortOption === "helpful" ? "default" : "outline"}
            size="sm"
            onClick={() => handleSortChange("helpful")}
          >
            Most Helpful
          </Button>
          <Button
            variant={sortOption === "recent" ? "default" : "outline"}
            size="sm"
            onClick={() => handleSortChange("recent")}
          >
            Most Recent
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review._id}
            review={review}
            onHelpful={handleHelpfulVote}
            hasVoted={votedReviews.has(review._id)}
          />
        ))}
      </div>

      {pagination && pagination.pages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="flex items-center px-4 text-sm text-gray-600">
            Page {currentPage} of {pagination.pages}
          </span>
          <Button
            variant="outline"
            onClick={() =>
              setCurrentPage((prev) => Math.min(pagination.pages, prev + 1))
            }
            disabled={currentPage === pagination.pages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default ReviewList;
