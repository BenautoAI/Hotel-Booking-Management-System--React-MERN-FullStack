import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import RatingStars from "./RatingStars";
import HelpfulButton from "./HelpfulButton";
import { ReviewType } from "../../../../shared/types";
import { ChevronDown, ChevronUp, Edit, Trash2, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { format } from "date-fns";

type ReviewCardProps = {
  review: ReviewType;
  onHelpful?: (reviewId: string) => void;
  onEdit?: (reviewId: string) => void;
  onDelete?: (reviewId: string) => void;
  canEdit?: boolean;
  canDelete?: boolean;
  hasVoted?: boolean;
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  onHelpful,
  onEdit,
  onDelete,
  canEdit = false,
  canDelete = false,
  hasVoted = false,
}) => {
  const [showCategories, setShowCategories] = useState(false);

  const getReviewerName = () => {
    if (typeof review.userId === "object" && review.userId) {
      return `${review.userId.firstName} ${review.userId.lastName}`;
    }
    return "Anonymous";
  };

  const canEditReview = () => {
    if (!canEdit) return false;
    const reviewDate = new Date(review.createdAt);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return reviewDate > thirtyDaysAgo;
  };

  const categoryLabels = {
    cleanliness: "Cleanliness",
    service: "Service",
    location: "Location",
    value: "Value for Money",
    amenities: "Amenities",
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="font-semibold text-lg">{getReviewerName()}</h4>
              {review.isVerified && (
                <Badge variant="default" className="bg-green-100 text-green-800">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Verified Guest
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <RatingStars rating={review.rating} size="sm" />
              <span>
                {format(new Date(review.createdAt), "MMM dd, yyyy")}
              </span>
              {review.updatedAt !== review.createdAt && (
                <span className="italic">(Edited)</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {canEditReview() && onEdit && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(review._id)}
                className="flex items-center gap-1"
              >
                <Edit className="w-4 h-4" />
                Edit
              </Button>
            )}
            {canDelete && onDelete && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onDelete(review._id)}
                className="flex items-center gap-1 text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </Button>
            )}
          </div>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>

        <div className="mb-4">
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            {showCategories ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Hide detailed ratings
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show detailed ratings
              </>
            )}
          </button>

          {showCategories && (
            <div className="mt-4 space-y-3 bg-gray-50 p-4 rounded-lg">
              {Object.entries(review.categories).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {categoryLabels[key as keyof typeof categoryLabels]}
                  </span>
                  <RatingStars rating={value} size="sm" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          {onHelpful && (
            <HelpfulButton
              reviewId={review._id}
              helpfulCount={review.helpfulCount}
              onVote={onHelpful}
              disabled={hasVoted}
            />
          )}
          <div className="text-xs text-gray-500">
            {review.helpfulCount === 1
              ? "1 person found this helpful"
              : `${review.helpfulCount} people found this helpful`}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
