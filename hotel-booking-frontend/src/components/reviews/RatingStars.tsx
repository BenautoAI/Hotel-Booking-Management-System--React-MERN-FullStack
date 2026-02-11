import React from "react";
import { Star } from "lucide-react";

type RatingStarsProps = {
  rating: number;
  onChange?: (rating: number) => void;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  showValue?: boolean;
};

const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  onChange,
  size = "md",
  interactive = false,
  showValue = false,
}) => {
  const [hoverRating, setHoverRating] = React.useState<number | null>(null);

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const displayRating = hoverRating !== null ? hoverRating : rating;

  const handleClick = (value: number) => {
    if (interactive && onChange) {
      onChange(value);
    }
  };

  const handleMouseEnter = (value: number) => {
    if (interactive) {
      setHoverRating(value);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(null);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          className={`
            ${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"}
            transition-all duration-150
            ${!interactive && "pointer-events-none"}
          `}
          aria-label={`Rate ${star} stars`}
        >
          <Star
            className={`
              ${sizeClasses[size]}
              ${
                star <= displayRating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-300"
              }
              transition-all duration-150
            `}
          />
        </button>
      ))}
      {showValue && (
        <span className="ml-2 text-sm font-medium text-gray-700">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default RatingStars;
