import LogoHead from "@repo/ui/icons/LogoHead";
import OutlineLogo from "@repo/ui/icons/OutlineFooterLogo";
import Link from "next/link";
import { PiFacebookLogo, PiInstagramLogo, PiLinkedinLogo } from "react-icons/pi";
import Tooltip from "../common/Tooltip";

export default function Footer() {
  return (
    <footer className="bg-primary-500 p-sections from-primary-300 via-primary-400 overflow-hidden bg-gradient-to-tr from-10% via-60% to-70% py-4 pt-10 shadow-inner">
      <div className="container flex flex-col items-center">
        <OutlineLogo className="mx-auto mb-2" strokeStyles="stroke-primary-300" lang="ar" />

        <div className="relative w-full">
          <p className="mb-10 text-center text-neutral-300 md:absolute md:top-1/2 md:left-1/2 md:mb-0 md:-translate-x-1/2 md:-translate-y-1/2">
            جميع الحقوق محفوظة لشركة مستشير © 2025
          </p>

          <div className="flex w-full items-center justify-between md:justify-between">
            <div className="flex gap-4">
              <Tooltip label="لينكد إن">
                <Link href="https://www.linkedin.com/company/moustachir" aria-label="لينكد إن" target="_blank">
                  <PiLinkedinLogo size={40} className="text-neutral-300" />
                </Link>
              </Tooltip>
              <Tooltip label="فيسبوك">
                <Link href="https://www.facebook.com/moustachirr" aria-label="فيسبوك" target="_blank">
                  <PiFacebookLogo size={40} className="text-neutral-300" />
                </Link>
              </Tooltip>
              <Tooltip label="انستجرام">
                <Link href="https://www.instagram.com/moustachir.consulting/" aria-label="انستجرام" target="_blank">
                  <PiInstagramLogo size={40} className="text-neutral-300" />
                </Link>
              </Tooltip>
            </div>

            <LogoHead className="w-10" pathClasses="fill-neutral-300 stroke-0" />
          </div>
        </div>
      </div>
    </footer>
  );
}
