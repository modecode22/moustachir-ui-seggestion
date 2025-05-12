"use client";

import { useState, useEffect } from "react";
import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { 
  PiMagnifyingGlass, 
  PiFunnel,
  PiSortAscending,
  PiUsersThree,
  PiBroom
} from "react-icons/pi";
import { consultantsData } from "./consultants-data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/select";
import { ConsultantCard } from "./ConsultantCard";

type Consultant = {
  name: string;
  nameInArabic: string;
  profileUrl: string;
  imageUrl: string;
  fields: string[];
  pricePerHour: number;
  currency: string;
  bookPageUrl: string;
};

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

const ALL_FIELDS_OPTION_VALUE = "__ALL_FIELDS__";

export function ConsultantsList() {
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState<string | null>(null); // null means all fields
  const [allFields, setAllFields] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setConsultants(consultantsData);
      const fields = new Set<string>();
      consultantsData.forEach((consultant) => {
        consultant.fields.forEach((field) => {
          if (field && field.trim() !== "") {
            fields.add(field.trim());
          }
        });
      });
      setAllFields(Array.from(fields).sort());
      setIsLoading(false);
    }, 500);
  }, []);

  const sortConsultants = (consultantsToSort: Consultant[]) => {
    const sortedConsultants = [...consultantsToSort];
    switch (sortOption) {
      case "price-asc":
        return sortedConsultants.sort((a, b) => a.pricePerHour - b.pricePerHour);
      case "price-desc":
        return sortedConsultants.sort((a, b) => b.pricePerHour - a.pricePerHour);
      case "name-asc":
        return sortedConsultants.sort((a, b) => a.nameInArabic.localeCompare(b.nameInArabic));
      case "name-desc":
        return sortedConsultants.sort((a, b) => b.nameInArabic.localeCompare(a.nameInArabic));
      default:
        return sortedConsultants;
    }
  };

  const filteredConsultants = sortConsultants(consultants.filter((consultant) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      searchQuery === "" || 
      consultant.nameInArabic.toLowerCase().includes(searchLower) ||
      consultant.name.toLowerCase().includes(searchLower) ||
      consultant.fields.some(field => field.toLowerCase().includes(searchLower));
    
    const matchesField = 
      selectedField === null || 
      consultant.fields.includes(selectedField);
    
    return matchesSearch && matchesField;
  }));

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedField(null);
    setSortOption("default");
  };

  let fieldSelectValue: string;
  if (selectedField === null) {
    fieldSelectValue = ""; 
  } else if (selectedField === "") {
    // This case should ideally not happen if empty fields are filtered out during `setAllFields`
    fieldSelectValue = "null_value_for_empty_field_string"; // A unique non-empty value
  } else {
    fieldSelectValue = selectedField;
  }

  // Loading Skeleton
  if (isLoading) {
    return (
      <div className="w-full animate-pulse">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="h-11 w-full rounded-lg bg-neutral-200 md:max-w-sm"></div> {/* Search Skeleton */}
          <div className="flex gap-3">
            <div className="h-11 w-44 rounded-lg bg-neutral-200"></div> {/* Field Filter Skeleton */}
            <div className="h-11 w-44 rounded-lg bg-neutral-200"></div> {/* Sort Skeleton */}
          </div>
        </div>
        <div className="mb-6 h-5 w-1/4 rounded bg-neutral-200"></div> {/* Results Count Skeleton */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array(8).fill(0).map((_, index) => (
            <div key={index}>
              <div className="mb-3 aspect-square w-full rounded-lg bg-neutral-200"></div>
              <div className="mb-2 h-6 w-3/4 rounded bg-neutral-200"></div>
              <div className="h-4 w-1/2 rounded bg-neutral-200"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8"> {/* Added consistent spacing for children */}
      {/* Filters Section */}
      <div className="flex flex-col gap-4 rounded border border-neutral-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between md:gap-6">
      <div className="relative w-full md:max-w-sm">
          {/* Search Icon: Positioned inside the left padding area */}
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
            <PiMagnifyingGlass className="h-5 w-5 text-neutral-400" aria-hidden="true" />
          </div>

          <Input
            type="search" // Use type="search" for semantic HTML and potential browser clear button styling
            placeholder="ابحث عن مستشار أو مجال..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
      className="h-11 w-full rounded border border-neutral-300 bg-white py-2 pl-11  text-sm text-neutral-700 placeholder-neutral-500 shadow-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-secondary-500/70 transition-all duration-150 ease-in-out"
          />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Field filter */}
          <Select
            value={fieldSelectValue}
            onValueChange={(value) => {
              if (value === ALL_FIELDS_OPTION_VALUE || value === "") {
                setSelectedField(null);
              } else if (value === "null_value_for_empty_field_string") {
                setSelectedField(""); 
              } else {
                setSelectedField(value);
              }
            }}
          >
            <SelectTrigger className="h-11 w-full rounded text-sm ">
              <PiFunnel className="mr-2 h-4 w-4 text-neutral-500" />
              <SelectValue placeholder="جميع المجالات" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL_FIELDS_OPTION_VALUE}>جميع المجالات</SelectItem>
              {allFields.map((field) => (
                <SelectItem 
                  key={field} 
                  value={field === "" ? "null_value_for_empty_field_string" : field}
                >
                  {field === "" ? "(مجال فارغ)" : field}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {/* Sort options */}
          <Select
            value={sortOption}
            onValueChange={(value) => setSortOption(value as SortOption)}
          >
            <SelectTrigger className="h-11 w-full rounded text-sm ">
              <PiSortAscending className="mr-2 h-4 w-4 text-neutral-500" />
              <SelectValue placeholder="ترتيب حسب" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">الافتراضي</SelectItem>
              <SelectItem value="price-asc">السعر: الأقل أولاً</SelectItem>
              <SelectItem value="price-desc">السعر: الأعلى أولاً</SelectItem>
              <SelectItem value="name-asc">الاسم: أ-ي</SelectItem>
              <SelectItem value="name-desc">الاسم: ي-أ</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Active Filters Summary & Results Count */}
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-neutral-600">
          <span className="font-medium text-neutral-800">{filteredConsultants.length}</span> مستشار مطابق
        </p>
        {(searchQuery || selectedField !== null || sortOption !== "default") && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-neutral-500">الفلاتر النشطة:</span>
            {searchQuery && (
              <span className="rounded-full bg-secondary-50 px-2.5 py-1 text-xs font-medium text-primary-500">
                بحث: &quot;{searchQuery}&quot;
              </span>
            )}
            {selectedField !== null && (
              <span className="rounded-full bg-secondary-50 px-2.5 py-1 text-xs font-medium text-primary-500">
                المجال: {selectedField === "" ? "(فارغ)" : selectedField}
              </span>
            )}
            {sortOption !== "default" && (
              <span className="rounded-full bg-secondary-50 px-2.5 py-1 text-xs font-medium text-primary-500">
                الترتيب: 
                {sortOption === "price-asc" ? " السعر تصاعدي" : 
                 sortOption === "price-desc" ? " السعر تنازلي" :
                 sortOption === "name-asc" ? " الاسم أ-ي" : " الاسم ي-أ"}
              </span>
            )}
            <Button 
              variant="dark-ghost" 
              size="sm" 
              onClick={clearAllFilters}
              className="h-auto px-2 py-1 text-xs text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
            >
              <PiBroom className="mr-1.5 h-4 w-4" />
              مسح الكل
            </Button>
          </div>
        )}
      </div>

      {/* Consultants Grid */}
      {filteredConsultants.length > 0 ? (
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredConsultants.map((consultant) => (
            // Assuming ConsultantCard has a unique key like consultant.id or profileUrl
            <ConsultantCard key={consultant.profileUrl} consultant={consultant} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded border  border-dashed border-neutral-300 bg-neutral-100 py-16 text-center">
          <PiUsersThree className="mb-4 h-16 w-16 text-neutral-600" />
          <h3 className="mb-2 text-xl font-semibold text-neutral-600">لا يوجد مستشارون مطابقون</h3>
          <p className="mb-6 max-w-md text-sm text-neutral-500">
            حاول تعديل معايير البحث أو الفلترة، أو قم بإزالتها لعرض جميع المستشارين المتاحين.
          </p>
          <Button 
            variant="primary-solid" // More prominent variant
            onClick={clearAllFilters}
            className=" px-6 py-2.5 text-sm"
          >
            عرض كل المستشارين
          </Button>
        </div>
      )}
    </div>
  );
}