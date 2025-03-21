import React from 'react';
import {
  Breadcrumb as DefaultBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/ui/breadcrumb";
import { LuSlash } from 'react-icons/lu';

type BreadcrumbItemType = {
  label: string;
  href?: string;
}

type ReusableBreadcrumbProps = {
  items: BreadcrumbItemType[];
}

export function Breadcrumb({ items }: ReusableBreadcrumbProps) {
  return (
    <DefaultBreadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && (
              <BreadcrumbSeparator>
                <LuSlash />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </DefaultBreadcrumb>
  );
}