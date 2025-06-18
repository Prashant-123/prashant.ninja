import * as React from "react";

import { mergeClasses } from "@/lib/utils";
import Typography from "@/components/general/typography";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  variant?: "default" | "primary" | "accent" | "glass";
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, variant = "default", ...props }: TagProps, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "primary":
          return "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-glow-sm hover:from-primary-600 hover:to-primary-700";
        case "accent":
          return "bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg hover:shadow-glow-sm hover:from-accent-600 hover:to-accent-700";
        case "glass":
          return "glass border border-white/20 text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-white/10";
        default:
          return "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 hover:from-primary-200 hover:to-accent-200 hover:text-primary-800 dark:hover:from-primary-800 dark:hover:to-accent-800 dark:hover:text-primary-100 hover:shadow-md";
      }
    };

    return (
      <div
        ref={ref}
        className={mergeClasses(
          "flex cursor-default items-center justify-center rounded-xl px-4 py-1 transition-all duration-300",
          getVariantClasses(),
          className
        )}
        {...props}
      >
        <Typography variant="body3" className="text-sm font-semibold">
          {label}
        </Typography>
      </div>
    );
  }
);

Tag.displayName = "Tag";

export default Tag;
