"use client";

import * as React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { DayPicker } from "react-day-picker";

import { cn } from "#lib/utils";
import { buttonVariants } from "#stylesui/buttons";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  direction?: "rtl" | "ltr";
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  direction = "ltr",
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      dir={direction}
      showOutsideDays={showOutsideDays}
      className={cn(
        "p-3 shadow-md border border-neutral-700/20 bg-white",
        className
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium ",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "light-outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute"
        ),
        nav_button_previous: " left-1",
        nav_button_next: " right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-neutral-500  rounded w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r [&:has([aria-selected].day-outside)]:bg-neutral-100/50 [&:has([aria-selected])]:bg-neutral-300 first:[&:has([aria-selected])]:rounded-l last:[&:has([aria-selected])]:rounded-r focus-within:relative focus-within:z-20 rounded",
        day: cn(
          buttonVariants({ variant: "light-ghost" }),
          "h-9 w-9 p-0 font-normal  aria-selected:opacity-100 hover:bg-neutral-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-neutral-200 hover:bg-neutral-100 text-neutral-700  hover:bg-neutral-200  hover:text-dark-600 focus:bg-neutral-300  focus:text-neutral-900",
        day_today: " bg-secondary-50/50  text-secondary-900",
        day_outside:
          "day-outside text-dark-50 opacity-50  aria-selected:bg-neutral-300/50  aria-selected:text-dark-900 aria-selected:opacity-40",
        day_disabled: " text-light-900 opacity-50",
        day_range_middle:
          " aria-selected:bg-neutral-100  aria-selected:text-dark-500",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon = orientation === "left" ? LuChevronLeft : LuChevronRight;
          return <Icon className="h-4 w-4" />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
