import * as React from "react";
import { cn } from "#lib/utils";
import { Separator } from "#ui/separator";
import { Badge } from "#ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "#ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "#ui/command";
import { LuCheck, LuX } from "react-icons/lu";

/**
 * Props for MultiSelect component
 */
interface MultiSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * An array of option objects to be displayed in the multi-select component.
   * Each option object has a label, value, and an optional icon.
   */
  options: {
    /** The text to display for the option. */
    label: string;
    /** The unique value associated with the option. */
    value: string;
    /** Optional icon component to display alongside the option. */
    icon?: React.ComponentType<{ className?: string }>;
  }[];

  /**
   * Callback function triggered when the selected values change.
   * Receives an array of the new selected values.
   */
  onValueChange: (value: string[]) => void;

  /** The default selected values when the component mounts. */
  defaultValue?: string[];

  /**
   * Placeholder text to be displayed when no values are selected.
   * Optional, defaults to "Select options".
   */
  placeholder?: string;

  /**
   * Animation duration in seconds for the visual effects (e.g., bouncing badges).
   * Optional, defaults to 0 (no animation).
   */
  animation?: number;

  /**
   * Maximum number of items to display. Extra selected items will be summarized.
   * Optional, defaults to 3.
   */
  maxCount?: number;

  /**
   * The modality of the popover. When set to true, interaction with outside elements
   * will be disabled and only popover content will be visible to screen readers.
   * Optional, defaults to false.
   */
  modalPopover?: boolean;

  /**
   * If true, renders the multi-select component as a child of another component.
   * Optional, defaults to false.
   */
  asChild?: boolean;

  /**
   * Additional class names to apply custom styles to the multi-select component.
   * Optional, can be used to add custom styles.
   */
  className?: string;
}

export const MultiSelect = React.forwardRef<
  HTMLButtonElement,
  MultiSelectProps
>(
  (
    {
      options,
      onValueChange,
      defaultValue = [],
      placeholder = "Select options",
      maxCount = 3,
      modalPopover = false,
      asChild = false,
      className,
      ...props
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] =
      React.useState<string[]>(defaultValue);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

    const handleInputKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (event.key === "Enter") {
        setIsPopoverOpen(true);
      } else if (event.key === "Backspace" && !event.currentTarget.value) {
        const newSelectedValues = [...selectedValues];
        newSelectedValues.pop();
        setSelectedValues(newSelectedValues);
        onValueChange(newSelectedValues);
      }
    };

    const toggleOption = (option: string) => {
      const newSelectedValues = selectedValues.includes(option)
        ? selectedValues.filter((value) => value !== option)
        : [...selectedValues, option];
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };

    const handleClear = () => {
      setSelectedValues([]);
      onValueChange([]);
    };

    const handleTogglePopover = () => {
      setIsPopoverOpen((prev) => !prev);
    };

    const clearExtraOptions = () => {
      const newSelectedValues = selectedValues.slice(0, maxCount);
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };

    const toggleAll = () => {
      if (selectedValues.length === options.length) {
        handleClear();
      } else {
        const allValues = options.map((option) => option.value);
        setSelectedValues(allValues);
        onValueChange(allValues);
      }
    };

    return (
      <>
        <Popover
          open={isPopoverOpen}
          onOpenChange={setIsPopoverOpen}
          modal={modalPopover}
        >
          <PopoverTrigger
            ref={ref}
            onClick={handleTogglePopover}
            className="!w-full"
          >
            {selectedValues.length > 0
              ? `اخترت ${selectedValues.length} ولاية`
              : placeholder}
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0"
            align="start"
            onEscapeKeyDown={() => setIsPopoverOpen(false)}
          >
            <Command className="rounded-none sm:rounded-3xl">
              <CommandInput
                className="rounded-none"
                placeholder="ابحث..."
                onKeyDown={handleInputKeyDown}
              />
              <CommandList>
                <CommandEmpty>لا توجد نتائج</CommandEmpty>
                <CommandGroup>
                  <CommandItem
                    key="all"
                    onSelect={toggleAll}
                    className={cn(
                      "cursor-pointer",
                      selectedValues.length === options.length &&
                        "bg-primary-50/20 rounded-none border-transparent hover:border-transparent text-primary-600 hover:bg-primary-50/50 hover:text-primary-500"
                    )}
                  >
                    <div
                      className={cn(
                        "border-primary-400 ml-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                        selectedValues.length === options.length
                          ? "bg-primary-300 text-neutral-50"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <LuCheck className="h-4 w-4" />
                    </div>
                    <span>(اختر الكل)</span>
                  </CommandItem>
                  {options.map((option) => {
                    const isSelected = selectedValues.includes(option.value);
                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => toggleOption(option.value)}
                        className={cn(
                          "cursor-pointer last:rounded-b-3xl",
                          isSelected &&
                            "bg-primary-50/20 rounded-none border-transparent hover:border-transparent text-primary-600 hover:bg-primary-50/50 hover:text-primary-500 last:rounded-b-3xl"
                        )}
                      >
                        <div
                          className={cn(
                            "border-primary-400 ml-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                            isSelected
                              ? "bg-primary-300 text-neutral-50"
                              : "opacity-50 [&_svg]:invisible"
                          )}
                        >
                          <LuCheck className="h-4 w-4" />
                        </div>
                        {option.icon && (
                          <option.icon className=" mr-2 h-4 w-4" />
                        )}
                        <span>{option.label}</span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup>
                  <div className="flex items-center justify-between">
                    {selectedValues.length > 0 && (
                      <>
                        <CommandItem
                          onSelect={handleClear}
                          className="flex-1 cursor-pointer items-center justify-center rounded-l-md rounded-br-3xl p-0"
                        >
                          أفرغ
                        </CommandItem>
                        <Separator
                          orientation="vertical"
                          className="flex h-full min-h-6"
                        />
                      </>
                    )}
                    <CommandItem
                      onSelect={() => setIsPopoverOpen(false)}
                      className={cn(
                        "max-w-full flex-1 cursor-pointer items-center justify-center rounded-b-3xl p-0",
                        selectedValues.length > 0 && "!rounded-r-md"
                      )}
                    >
                      أغلق
                    </CommandItem>
                  </div>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {selectedValues.length > 0 ? (
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-wrap items-center gap-1">
              {selectedValues.slice(0, maxCount).map((value) => {
                const option = options.find((o) => o.value === value);
                const IconComponent = option?.icon;
                return (
                  <Badge key={value}>
                    {IconComponent && (
                      <IconComponent className="mr-2 h-4 w-4" />
                    )}
                    {option?.label}
                    <LuX
                      className="mr-2 h-3 w-3 cursor-pointer"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleOption(value);
                      }}
                    />
                  </Badge>
                );
              })}
              {selectedValues.length > maxCount && (
                <Badge variant={"primary"}>
                  {`أكثر من ${selectedValues.length - maxCount}`}
                  <LuX
                    className="mr-2 h-3 w-3 cursor-pointer"
                    onClick={(event) => {
                      event.stopPropagation();
                      clearExtraOptions();
                    }}
                  />
                </Badge>
              )}
              {/* <div className="flex w-full items-center justify-end">
                <XIcon
                  className="text-muted-foreground mx-2 h-4 cursor-pointer"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleClear();
                  }}
                />
              </div> */}
            </div>
          </div>
        ) : null}
      </>
    );
  }
);

MultiSelect.displayName = "MultiSelect";
