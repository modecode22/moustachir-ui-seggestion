import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "#lib/utils";
const badgeVariants = cva(
  "inline-flex items-center select-none  rounded  px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-800 focus:ring-offset-2 w-fit",
  {
    variants: {
      variant: {
        default:
          " bg-neutral-100 border border-neutral-300 text-neutral-500 hover:bg-neutral-200/90 ",
        primary: "bg-primary-500  text-neutral-50 hover:bg-primary-400 ",
        success: "bg-success-100  text-success-600 hover:bg-success-100/90 ",
        warning: "bg-warning-100  text-warning-600 hover:bg-warning-100/90 ",
        error: "bg-error-100  text-error-600 hover:bg-error-100/90",
        info: "bg-info-100  text-info-600 hover:bg-info-100/90",
        emerald: "bg-emerald-100  text-emerald-600 hover:bg-emerald-100/90",
        light: "bg-white shadow-sm  text-light-600 hover:bg-white/90",
        dark: "bg-neutral-900 shadow-sm  text-neutral-200 hover:bg-neutral-900/90 ",
        outline: "border  border-neutral-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
