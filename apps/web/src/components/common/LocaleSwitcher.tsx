"use client";
import { usePathname, useRouter } from "next/navigation";
import { Locale, i18n } from "@/i18n.config";
import { SelectTrigger } from "@radix-ui/react-select";
import { RiTranslate2 } from "react-icons/ri";
import Tooltip from "./Tooltip";
import { Select, SelectContent, SelectItem } from "@repo/ui/select";
import { Button } from "@repo/ui/button";

const LocaleSwitcher = ({ lang }: { lang: Locale }) => {
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`,
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";

        segments.splice(1, 1);
        return segments.join("/");
      }

      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };
  return (
    <Tooltip label={`change language to ${lang === "en" ? "Arabic" : "English"}`}>
      <Select
        defaultValue={lang}
        value={lang}
        onValueChange={(value) => {
          router.push(redirectedPathName(value));
        }}
      >
        <SelectTrigger className="flex w-fit items-center justify-center rounded">
          <Button asChild variant={"light-ghost"} className="" size={"small-icon"}>
            <RiTranslate2 className="!size-5" />
          </Button>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ar">Arabic</SelectItem>
          <SelectItem value="en">English</SelectItem>
        </SelectContent>
      </Select>
    </Tooltip>
  );
};

export default LocaleSwitcher;

// this for more then one two langs
{
  /* <ul className="flex gap-x-3">
{i18n.locales.map((locale) => {
  return (
    <li key={locale}>
      <Link
        href={redirectedPathName(locale)}
        className="rounded-md border bg-black px-3 py-2 text-white"
      >
        {locale}
      </Link>
    </li>
  );
})}
</ul> */
}
