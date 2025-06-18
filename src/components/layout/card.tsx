import { mergeClasses } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={mergeClasses(
          "overflow-hidden rounded-2xl border-[0.5px] border-gray-300 bg-white shadow-lg transition-all duration-300 dark:border-gray-600 dark:bg-gray-100",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
