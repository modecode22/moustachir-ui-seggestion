"use client";

import React, { useState } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { RiCheckLine } from "react-icons/ri";
import { selectTriggerInputClasses } from "@repo/ui/stylesui/input";
import { cn } from "@repo/ui/lib/utils";

export interface Option {
  id: string | number;
  name: string;
}

interface CustomClasses {
  button?: string;
  options?: string;
  option?: string;
}

interface MultiSelectProps {
  options: Option[];
  onChange?: (selectedOptions: Option[]) => void;
  value?: Option[];
  placeholder?: string;
  maxWidth?: string;
  customClasses?: CustomClasses;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  onChange,
  value,
  placeholder = "Select options",
  maxWidth = "max-w-48",
  customClasses = {},
}) => {
  const [selected, setSelected] = useState<Option[]>(value || []);

  const handleChange = (newSelection: Option[]) => {
    setSelected(newSelection);
    if (onChange) {
      onChange(newSelection);
    }
  };

  return (
    <Listbox value={selected} onChange={handleChange} multiple>
      <ListboxButton 
        className={cn(
          selectTriggerInputClasses.default, 
          "w-full",
          customClasses.button
        )}
      >
        {selected.length > 0 
          ? `${selected.length} ${selected.length === 1 ? 'option' : 'options'} selected` 
          : placeholder}
      </ListboxButton>
      <ListboxOptions
        className={cn(
          "mt-1 rounded bg-neutral-700 p-2",
          maxWidth,
          "w-[var(--button-width)] rounded-xl border border-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
          customClasses.options
        )}
        anchor="bottom"
      >
        {options.map((option) => (
          <ListboxOption
            key={option.id}
            value={option}
            className={cn(
              "group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5",
              "data-[focus]:bg-neutral-600/50 data-[focus]:text-primary-50 text-neutral-300",
              customClasses.option
            )}
          >
            <RiCheckLine className="invisible size-4 group-data-[selected]:visible" />
            <div className="text-sm/6 font-beiruti">{option.name}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default MultiSelect;