import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full border-2 border-transparent bg-gradient-to-br from-blue-400 via-purple-400 to-blue-500 p-0.5",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const avatarImageVariants = cva(
  "aspect-square h-full w-full object-cover rounded-full"
);

const avatarFallbackVariants = cva(
  "flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white font-semibold",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, src, alt, fallback, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false);
    const showFallback = !src || imageError;

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        {...props}
      >
        <div className="h-full w-full rounded-full bg-white p-0.5">
          {!showFallback ? (
            <img
              src={src}
              alt={alt}
              className={cn(avatarImageVariants())}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={cn(avatarFallbackVariants({ size }))}>
              {fallback || "U"}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
