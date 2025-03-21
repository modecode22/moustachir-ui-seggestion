// components/ui/heading.tsx
import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@repo/ui/lib/utils"

const headingVariants = cva(
  "scroll-m-20 tracking-tight",
  {
    variants: {
      variant: {
        h1: "text-2xl font-extrabold lg:text-5xl",
        h2: "text-xl font-semibold",
        h3: "text-lg font-semibold",
        h4: "text-base font-semibold",
        h5: "text-normal font-semibold",
        h6: "text-small font-semibold",
      },
      colorVariant: {
        default: "text-neutral-700",
        muted: "text-neutral-600",
        primary: "text-primary-500",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      }
    },
    defaultVariants: {
      variant: "h1",
      colorVariant: "default",
      align: "right",
    },
  }
)

type HeadingTagProps = Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof VariantProps<typeof headingVariants>>

export interface HeadingProps 
  extends HeadingTagProps,
    VariantProps<typeof headingVariants> {
  asChild?: boolean
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, colorVariant, align, ...props }, ref) => {
    const Comp = variant || "h1"

    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ variant, colorVariant, align, className }))}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }