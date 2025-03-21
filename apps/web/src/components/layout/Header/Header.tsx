import { navigation } from "@/lib/constants";

import Logo from "@repo/ui/icons/Logo";
import Link from "next/link";

import HeaderWithStyles from "./HeaderWithStyles";

import SideBar from "./SideBar";

const Header = () => {
  return (
    <header
      id="main-header"
      className="fixed top-0 right-0 left-0 z-50 bg-transparent py-4 transition-all duration-300"
    >
      <HeaderWithStyles />

      <div className="container mx-auto flex w-full flex-row-reverse items-center justify-between px-4 md:px-6">
        <Link href={"/"} className="flex">
          <Logo className="w-40 lg:inline lg:w-46" />
        </Link>
        <div className="flex items-center">
          {/* Desktop navigation - only visible on desktop */}
          <nav className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground after:bg-primary text-md relative font-medium transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>
          {/* Mobile menu button - only visible on mobile */}
          <div className="ml-4 flex lg:hidden">
            <SideBar lang="ar" HeaderLinks={navigation} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
