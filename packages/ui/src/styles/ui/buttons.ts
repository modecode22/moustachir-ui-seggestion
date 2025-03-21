import { cva } from "class-variance-authority";

// Primary button styles
const primaryStyles = {
  solid: "",
  outline: "",
  ghost: "",
};

// Secondary button styles
const secondaryStyles = {
  solid: "",
  outline: "",
  ghost: "",
};

// Dark button styles
const darkStyles = {
  solid: "",
  outline: "",
  ghost: "",
};

// Light button styles
const lightStyles = {
  solid: "",
  outline: "",
  ghost: "",
};

// white button styles
const whiteStyles = {
  solid: "",
  outline: "",
};

// Success button styles
const successStyles = {
  solid: "",
  outline: "",
  ghost: "",
};

// Error button styles
const errorStyles = {
  solid: "",
  outline: "",
  ghost: "",
};

// Warning button styles
const warningStyles = {
  solid: "",
  outline: "",
  ghost: "",
};

// Info button styles
const infoStyles = {
  solid: "",
  outline: "",
  ghost: "",
};

// Emerald button styles
const emeraldStyles = {
  solid: "",
  outline: "",
  ghost: "",
};

// Size styles
const sizeStyles = {
  default: "",
  sm: "",
  lg: "",
  icon: "",
  "small-icon": "",
};

// Button variants
export const buttonVariants = cva(
  "relative font-medium isolate inline-flex items-center justify-center gap-x-2 rounded h-8 focus:outline-none focus:outline focus:outline-2 focus:outline-offset-2 disabled:opacity-50 border-transparent before:absolute before:inset-0 before:-z-10 before:rounded after:absolute after:-z-10 after:-inset-px after:rounded before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none",
  {
    variants: {
      variant: {
        "primary-solid": primaryStyles.solid,
        "primary-outline": primaryStyles.outline,
        "primary-ghost": primaryStyles.ghost,
        "secondary-solid": secondaryStyles.solid,
        "secondary-outline": secondaryStyles.outline,
        "secondary-ghost": secondaryStyles.ghost,
        "dark-solid": darkStyles.solid,
        "dark-outline": darkStyles.outline,
        "dark-ghost": darkStyles.ghost,
        "light-solid": lightStyles.solid,
        "white-solid": whiteStyles.solid,
        "light-outline": lightStyles.outline,
        "light-ghost": lightStyles.ghost,
        "success-solid": successStyles.solid,
        "success-outline": successStyles.outline,
        "success-ghost": successStyles.ghost,
        "error-solid": errorStyles.solid,
        "error-outline": errorStyles.outline,
        "error-ghost": errorStyles.ghost,
        "warning-solid": warningStyles.solid,
        "warning-outline": warningStyles.outline,
        "warning-ghost": warningStyles.ghost,
        "info-solid": infoStyles.solid,
        "info-outline": infoStyles.outline,
        "info-ghost": infoStyles.ghost,
        "emerald-solid": emeraldStyles.solid,
        "emerald-outline": emeraldStyles.outline,
        "emerald-ghost": emeraldStyles.ghost,
      },
      size: sizeStyles,
    },
    defaultVariants: {
      variant: "primary-solid",
      size: "default",
    },
  }
);