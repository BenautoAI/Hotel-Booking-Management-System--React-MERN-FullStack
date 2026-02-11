import React from "react";
import { ThumbsUp } from "lucide-react";
import { Button } from "../ui/button";

type HelpfulButtonProps = {
  reviewId: string;
  helpfulCount: number;
  onVote: (reviewId: string) => void;
  disabled?: boolean;
};

const HelpfulButton: React.FC<HelpfulButtonProps> = ({
  reviewId,
  helpfulCount,
  onVote,
  disabled = false,
}) => {
  const handleClick = () => {
    if (!disabled) {
      onVote(reviewId);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleClick}
      disabled={disabled}
      className="flex items-center gap-1.5 text-xs"
    >
      <ThumbsUp
        className={`w-4 h-4 ${disabled ? "fill-blue-500 text-blue-500" : ""}`}
      />
      <span>Helpful</span>
      {helpfulCount > 0 && (
        <span className="font-semibold">({helpfulCount})</span>
      )}
    </Button>
  );
};

export default HelpfulButton;
