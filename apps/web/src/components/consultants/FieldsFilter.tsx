"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button";
import { PiCheck, PiArrowDown } from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/dropdown-menu";
import { ScrollArea } from "@repo/ui/scroll-area";

interface FieldsFilterProps {
  fields: string[];
  selectedField: string | null;
  onSelectField: (field: string | null) => void;
  maxDisplayed?: number;
}

export function FieldsFilter({ 
  fields, 
  selectedField, 
  onSelectField, 
  maxDisplayed = 5 
}: FieldsFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Display only a limited number of fields as buttons
  const displayedFields = fields.slice(0, maxDisplayed);
  // The rest will be in a dropdown
  const dropdownFields = fields.slice(maxDisplayed);

  return (
    <div className="flex flex-wrap gap-1.5">
      {/* "All" option */}
      <Button 
        variant={selectedField === null ? "primary-solid" : "primary-outline"}
        size="sm"
        className="h-8 rounded-full px-3 text-xs" 
        onClick={() => onSelectField(null)}
      >
        الكل
        {selectedField === null && <PiCheck className="ml-1 h-3 w-3" />}
      </Button>
      
      {/* Displayed fields as buttons */}
      {displayedFields.map((field) => (
        <Button
          key={field}
          variant={selectedField === field ? "primary-solid" : "primary-outline"}
          size="sm"
          className="h-8 rounded-full px-3 text-xs"
          onClick={() => onSelectField(field)}
        >
          {field}
          {selectedField === field && <PiCheck className="ml-1 h-3 w-3" />}
        </Button>
      ))}
      
      {/* Dropdown for remaining fields */}
      {dropdownFields.length > 0 && (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="secondary-solid" 
              size="sm"
              className="h-8 rounded-full px-3 text-xs"
            >
              المزيد
              <PiArrowDown className="mr-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <ScrollArea className="h-60">
              <div className="p-1">
                {dropdownFields.map((field) => (
                  <DropdownMenuItem
                    key={field}
                    className="flex cursor-pointer items-center justify-between rounded px-2 py-1.5 text-sm"
                    onSelect={() => {
                      onSelectField(field === selectedField ? null : field);
                      setIsOpen(false);
                    }}
                  >
                    {field}
                    {selectedField === field && (
                      <PiCheck className="h-4 w-4 text-primary-500" />
                    )}
                  </DropdownMenuItem>
                ))}
              </div>
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}