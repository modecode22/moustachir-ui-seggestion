import { cva } from "class-variance-authority";

// Primary button styles
const primaryStyles = {
  solid: "bg-gradient-to-r from-primary-500 to-primary-600 text-white backdrop-filter  border-b-4 border-primary-700 hover:border-b-0 hover:border-t-4 hover:from-primary-600 hover:to-primary-700 active:from-primary-700 active:to-primary-800 transform transition-all duration-150 shadow-lg hover:shadow-primary-500/30",
  outline: "bg-transparent border-2 border-primary-600 text-primary-800 hover:bg-primary-50/40 hover:border-primary-700 active:bg-primary-100/50 transition-colors",
  ghost: "bg-transparent text-primary-800 hover:text-primary-900 hover:bg-primary-50/40 active:bg-primary-100/50 transition-colors",
};

// Secondary button styles
const secondaryStyles = {
  solid: "bg-gradient-to-r from-secondary-500 to-secondary-600 text-white backdrop-filter  border-b-4 border-secondary-700 hover:border-b-0 hover:border-t-4 hover:from-secondary-600 hover:to-secondary-700 active:from-secondary-700 active:to-secondary-800 transform transition-all duration-150 shadow-lg hover:shadow-secondary-500/30",
  outline: "bg-transparent border-2 border-secondary-600 text-secondary-800 hover:bg-secondary-50/40 hover:border-secondary-700 active:bg-secondary-100/50 transition-colors",
  ghost: "bg-transparent text-secondary-800 hover:text-secondary-900 hover:bg-secondary-50/40 active:bg-secondary-100/50 transition-colors",
};

// Dark button styles
const darkStyles = {
  solid: "bg-neutral-900 text-white border-b-4 border-black hover:border-b-0 hover:border-t-4 hover:bg-black active:bg-neutral-950 transform transition-all duration-150 shadow-lg",
  outline: "bg-transparent border-2 border-neutral-700 text-neutral-800 hover:bg-neutral-100 hover:border-neutral-800 active:bg-neutral-200 transition-colors",
  ghost: "bg-transparent text-neutral-800 hover:text-black hover:bg-neutral-100 active:bg-neutral-200 transition-colors",
};

// Light button styles
const lightStyles = {
  solid: "bg-white/90 backdrop-blur-lg text-neutral-800 border-b-4 border-neutral-200 hover:border-b-0 hover:border-t-4 hover:bg-white active:bg-neutral-50 transform transition-all duration-150 shadow-lg",
  outline: "bg-transparent border-2 border-neutral-400 text-neutral-700 hover:bg-neutral-50/60 hover:border-neutral-500 active:bg-neutral-100 transition-colors",
  ghost: "bg-transparent text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50/60 active:bg-neutral-100 transition-colors",
};

// White button styles
const whiteStyles = {
  solid: "bg-white text-neutral-800 border-b-4 border-neutral-200 hover:border-b-0 hover:border-t-4 hover:bg-neutral-50 active:bg-neutral-100 transform transition-all duration-150 shadow-lg",
  outline: "bg-transparent border-2 border-neutral-300 text-neutral-800 hover:bg-neutral-50/60 hover:border-neutral-400 active:bg-neutral-100 transition-colors",
};

// Success button styles
const successStyles = {
  solid: "bg-gradient-to-r from-success-500 to-success-600 text-white border-b-4 border-success-700 hover:border-b-0 hover:border-t-4 hover:from-success-600 hover:to-success-700 active:from-success-700 active:to-success-800 transform transition-all duration-150 shadow-lg hover:shadow-success-500/30",
  outline: "bg-transparent border-2 border-success-600 text-success-800 hover:bg-success-50/40 hover:border-success-700 active:bg-success-100/50 transition-colors",
  ghost: "bg-transparent text-success-800 hover:text-success-900 hover:bg-success-50/40 active:bg-success-100/50 transition-colors",
};

// Error button styles
const errorStyles = {
  solid: "bg-gradient-to-r from-red-500 to-red-600 text-white border-b-4 border-red-700 hover:border-b-0 hover:border-t-4 hover:from-red-600 hover:to-red-700 active:from-red-700 active:to-red-800 transform transition-all duration-150 shadow-lg hover:shadow-red-500/30",
  outline: "bg-transparent border-2 border-red-600 text-red-800 hover:bg-red-50/40 hover:border-red-700 active:bg-red-100/50 transition-colors",
  ghost: "bg-transparent text-red-800 hover:text-red-900 hover:bg-red-50/40 active:bg-red-100/50 transition-colors",
};

// Warning button styles
const warningStyles = {
  solid: "bg-gradient-to-r from-amber-400 to-amber-500 text-white border-b-4 border-amber-600 hover:border-b-0 hover:border-t-4 hover:from-amber-500 hover:to-amber-600 active:from-amber-600 active:to-amber-700 transform transition-all duration-150 shadow-lg hover:shadow-amber-400/30",
  outline: "bg-transparent border-2 border-amber-500 text-amber-800 hover:bg-amber-50/40 hover:border-amber-600 active:bg-amber-100/50 transition-colors",
  ghost: "bg-transparent text-amber-800 hover:text-amber-900 hover:bg-amber-50/40 active:bg-amber-100/50 transition-colors",
};

// Info button styles
const infoStyles = {
  solid: "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-b-4 border-blue-700 hover:border-b-0 hover:border-t-4 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 transform transition-all duration-150 shadow-lg hover:shadow-blue-500/30",
  outline: "bg-transparent border-2 border-blue-600 text-blue-800 hover:bg-blue-50/40 hover:border-blue-700 active:bg-blue-100/50 transition-colors",
  ghost: "bg-transparent text-blue-800 hover:text-blue-900 hover:bg-blue-50/40 active:bg-blue-100/50 transition-colors",
};

// Emerald button styles
const emeraldStyles = {
  solid: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-b-4 border-emerald-700 hover:border-b-0 hover:border-t-4 hover:from-emerald-600 hover:to-emerald-700 active:from-emerald-700 active:to-emerald-800 transform transition-all duration-150 shadow-lg hover:shadow-emerald-500/30",
  outline: "bg-transparent border-2 border-emerald-600 text-emerald-800 hover:bg-emerald-50/40 hover:border-emerald-700 active:bg-emerald-100/50 transition-colors",
  ghost: "bg-transparent text-emerald-800 hover:text-emerald-900 hover:bg-emerald-50/40 active:bg-emerald-100/50 transition-colors",
};

// Size styles
const sizeStyles = {
  default: "min-h-[48px] px-6 text-base",
  sm: "min-h-[36px] px-4 text-sm",
  lg: "min-h-[60px] px-8 text-lg",
  icon: "p-3 aspect-square",
  "small-icon": "p-2 aspect-square",
};

// Button variants
export const buttonVariants = cva(
  "relative font-medium inline-flex items-center justify-center gap-x-2 rounded cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:pointer-events-none",
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