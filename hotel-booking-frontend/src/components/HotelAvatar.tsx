import React from "react";
import { Avatar } from "./ui/avatar";
import { Building2 } from "lucide-react";
import { cn } from "../lib/utils";
import { Badge } from "./ui/badge";

export interface HotelAvatarProps {
  hotelName: string;
  imageUrl?: string;
  size?: "sm" | "default" | "md" | "lg" | "xl" | "2xl";
  starRating?: number;
  showRating?: boolean;
  className?: string;
  onClick?: () => void;
}

const HotelAvatar: React.FC<HotelAvatarProps> = ({
  hotelName,
  imageUrl,
  size = "default",
  starRating,
  showRating = false,
  className,
  onClick,
}) => {
  const fallbackContent = (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <Building2 className="h-1/2 w-1/2" />
    </div>
  );

  return (
    <div
      className={cn(
        "relative inline-flex flex-col items-center",
        onClick && "cursor-pointer group",
        className
      )}
      onClick={onClick}
    >
      <div className="relative">
        <Avatar
          src={imageUrl}
          alt={hotelName}
          size={size}
          fallback={fallbackContent}
          className={cn(
            "transition-all duration-300",
            onClick && "group-hover:scale-105 group-hover:shadow-lg"
          )}
        />
        {showRating && starRating && (
          <div className="absolute -bottom-1 -right-1 z-10">
            <Badge
              variant="default"
              className="text-[10px] px-1.5 py-0 h-5 bg-amber-500 text-white border-2 border-white shadow-md"
            >
              ⭐ {starRating}
            </Badge>
          </div>
        )}
      </div>
      {size !== "sm" && (
        <div className="mt-2 text-center max-w-full">
          <p
            className={cn(
              "font-medium text-gray-700 truncate",
              size === "default" && "text-xs max-w-[80px]",
              size === "md" && "text-sm max-w-[100px]",
              size === "lg" && "text-sm max-w-[120px]",
              size === "xl" && "text-base max-w-[140px]",
              size === "2xl" && "text-lg max-w-[160px]"
            )}
            title={hotelName}
          >
            {hotelName}
          </p>
        </div>
      )}
    </div>
  );
};

export default HotelAvatar;
