import React from "react";
import RatingStars from "./RatingStars";

type ReviewStatsProps = {
  averageRating: number;
  reviewCount: number;
  categoryAverages?: {
    cleanliness: number;
    service: number;
    location: number;
    value: number;
    amenities: number;
  };
};

const ReviewStats: React.FC<ReviewStatsProps> = ({
  averageRating,
  reviewCount,
  categoryAverages,
}) => {
  const categoryLabels = {
    cleanliness: "Cleanliness",
    service: "Service",
    location: "Location",
    value: "Value for Money",
    amenities: "Amenities",
  };

  return (
    <div className="bg-white rounded-lg border p-6 mb-6">
      <h3 className="text-2xl font-bold mb-4">Guest Reviews</h3>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold text-blue-600 mb-2">
            {averageRating > 0 ? averageRating.toFixed(1) : "N/A"}
          </div>
          <RatingStars rating={averageRating} size="lg" />
          <p className="text-sm text-gray-600 mt-2">
            {reviewCount} {reviewCount === 1 ? "review" : "reviews"}
          </p>
        </div>

        {categoryAverages && (
          <div className="flex-1 space-y-2 ml-8">
            {Object.entries(categoryAverages).map(([key, value]) => (
              <div key={key} className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700 w-32">
                  {categoryLabels[key as keyof typeof categoryLabels]}
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${(value / 5) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-gray-700 w-8">
                  {value.toFixed(1)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {reviewCount === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p className="text-lg">No reviews yet</p>
          <p className="text-sm mt-2">Be the first to share your experience!</p>
        </div>
      )}
    </div>
  );
};

export default ReviewStats;
