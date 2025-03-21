import React from "react";
import Link from "next/link";
import { i18n, Locale } from "@/i18n.config";
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.RefAttributes<HTMLAnchorElement> & {
    href: string;
    lang: Locale;
  };
const CustomLink = ({ href, lang, ...props }: LinkProps) => {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;
  return <Link href={path} {...props} />;
};

export default CustomLink;
