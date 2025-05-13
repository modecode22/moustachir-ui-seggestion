"use client";

import { Locale } from "@/i18n.config";
import { Sheet, SheetContent, SheetTrigger } from "@repo/ui/sheet";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LuAlignJustify } from "react-icons/lu";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

const SideBar = ({
  lang,
  HeaderLinks,
}: {
  lang: Locale;
  HeaderLinks: {
    name: string;
    href: string;
  }[];
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const isXlScreen = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (isXlScreen && open) {
      setOpen(false);
    }
  }, [isXlScreen, open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger ref={ref} className="flex xl:hidden cursor-pointer">
        <LuAlignJustify className="size-8" />
      </SheetTrigger>
      <SheetContent
        side={lang === "en" ? "left" : "right"}
        className="flex flex-col gap-3 px-3 xl:hidden"
        title="Navigation Menu"
      >
        {HeaderLinks.map((link) => (
          <Link
            key={link.href}
            lang={lang}
            className="flex h-10 items-center gap-3 border-b border-neutral-200 px-3 text-lg text-neutral-700 transition-all duration-75 hover:text-neutral-900"
            href={link.href}
            onClickCapture={() => ref.current?.click()}
          >
            {link.name}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
