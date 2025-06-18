"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/navigation/drawer";
import { NAV_LINKS } from "@/lib/data";
import { mergeClasses } from "@/lib/utils";
import useWindowSize from "@/hooks/use-window-size";
import useScroll from "@/hooks/use-scroll";
import Link from "@/components/navigation/link";
import ThemeSwitcher from "@/components/general/theme-switcher";
import IconButton from "@/components/general/icon-button";
import DownloadCV from "@/components/general/download-cv";
import Typography from "@/components/general/typography";

const Logo = () => (
  <div className="group flex cursor-pointer items-center gap-2">
    <div className="relative">
      <Sparkles
        size={20}
        className="text-primary-500 group-hover:animate-pulse"
      />
      <div className="absolute inset-0 rounded-full bg-primary-500/20 blur-sm transition-all duration-300 group-hover:blur-md"></div>
    </div>
    <Typography
      variant="h3"
      className="gradient-text font-bold transition-transform duration-300 group-hover:scale-105"
    >
      {"<PK />"}
    </Typography>
  </div>
);

const Header = () => {
  const scrolled = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  // close sidebar if open in screen size < 768px
  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={mergeClasses(
        "sticky top-0 z-30 w-full border-b border-transparent transition-all duration-500",
        scrolled ? "border-white/10 shadow-lg backdrop-blur-xl" : ""
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <Link href="/" noCustomization className="animate-fade-in-left">
          <Logo />
        </Link>

        <div className="animate-fade-in-right hidden items-center gap-8 md:flex">
          <ul className="flex list-none items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="group relative rounded-lg px-3 py-2 transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-100 to-accent-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-primary-900/20 dark:to-accent-900/20"></div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-8 w-0.5 bg-gradient-to-b from-primary-400 to-accent-400 opacity-30"></div>

          <div className="flex items-center gap-4">
            <div className="hover-glow rounded-lg p-1 transition-all duration-300">
              <ThemeSwitcher />
            </div>
            <div className="hover-glow rounded-lg transition-all duration-300">
              <DownloadCV />
            </div>
          </div>
        </div>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton className="glass border border-white/20 transition-all duration-300 hover:bg-white/10">
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent className="glass border-l border-white/20">
            <div className="dark:from-primary-950/30 dark:to-accent-950/30 flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-primary-50/50 to-accent-50/50 p-4">
              <Logo />
              <DrawerClose asChild>
                <IconButton className="glass border border-white/20 hover:bg-white/10">
                  <X />
                </IconButton>
              </DrawerClose>
            </div>

            <div className="border-b border-white/10 p-4">
              <ul className="flex list-none flex-col gap-4">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      noCustomization
                      className="block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-300 hover:bg-white/10 dark:text-gray-50"
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 p-4">
              <div className="flex items-center justify-center">
                <ThemeSwitcher />
              </div>
              <DownloadCV />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
