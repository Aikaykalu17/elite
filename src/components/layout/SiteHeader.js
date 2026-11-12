"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import { applyLink, navLinks } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

const menuLinks = [{ href: "/", label: "Home" }, ...navLinks];

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Brand({ onClick }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Elite FC, home"
      className="flex items-center gap-2.5 rounded-full py-1 pr-3"
    >
      <Image
        src="/logo-mark.webp"
        alt=""
        width={220}
        height={256}
        priority
        className="h-9 w-auto"
      />
      <span className="font-display text-[1.375rem] leading-none font-bold whitespace-nowrap text-fg">
        Elite FC
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const dialogRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Soften/deepen the pill's shadow once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu after navigating.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
  }, [pathname]);

  // If the window grows to the desktop layout, the menu trigger disappears,
  // so close the dialog rather than leave it stranded.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 80rem)");
    const onChange = (event) => {
      if (event.matches) dialogRef.current?.close();
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  function openMenu() {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    setMenuOpen(true);
    // Start on "Close" rather than the logo: it is the most useful first stop.
    dialog.querySelector("[data-autofocus]")?.focus();
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        data-tone="dark"
        data-scrolled={scrolled}
        className="pill pointer-events-auto mx-auto flex h-14 w-full max-w-[44rem] items-center justify-between gap-2 rounded-full border border-line pr-1.5 pl-3 xl:w-fit xl:max-w-none xl:gap-8 xl:pl-4"
      >
        <Brand />

        <nav aria-label="Main navigation" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(pathname, href) ? "page" : undefined}
                  className="inline-flex min-h-10 items-center rounded-full px-3.5 text-[0.9375rem] font-semibold text-muted transition-colors hover:bg-fg/10 hover:text-fg aria-[current=page]:bg-fg/15 aria-[current=page]:text-fg"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <div className="hidden sm:block">
            <ButtonLink href={applyLink.href}>{applyLink.label}</ButtonLink>
          </div>
          <button
            type="button"
            onClick={openMenu}
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            className="grid size-11 shrink-0 place-items-center rounded-full bg-fg/10 text-fg transition-colors hover:bg-fg/20 xl:hidden"
          >
            <span className="flex w-5 flex-col items-end gap-[5px]" aria-hidden="true">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-3 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      <dialog
        id="site-menu"
        ref={dialogRef}
        data-tone="dark"
        aria-label="Menu"
        className="menu-dialog pointer-events-auto"
        onClose={() => setMenuOpen(false)}
        onClick={(event) => {
          // A click on the backdrop lands on the dialog element itself.
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="px-1.5 pb-1.5">
          <div className="flex h-[3.375rem] items-center justify-between pr-0 pl-1.5">
            <Brand onClick={closeMenu} />
            <div className="flex items-center gap-1.5">
              <ThemeToggle />
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                data-autofocus
                className="grid size-11 shrink-0 place-items-center rounded-full bg-fg/10 text-fg transition-colors hover:bg-fg/20"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <nav aria-label="Menu navigation" className="px-1.5 pt-2">
            <ul className="grid gap-x-3 sm:grid-cols-2">
              {menuLinks.map(({ href, label }) => {
                const active = isActive(pathname, href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className="group flex min-h-14 items-center gap-3 rounded-2xl px-3 font-display text-[1.75rem] leading-none font-bold text-fg transition-colors hover:bg-fg/10 aria-[current=page]:text-accent-ink"
                    >
                      <span
                        aria-hidden="true"
                        className="size-2 shrink-0 rounded-full bg-accent opacity-0 group-aria-[current=page]:opacity-100"
                      />
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="px-1.5 pt-3 pb-1.5">
            <ButtonLink
              href={applyLink.href}
              size="lg"
              className="w-full"
              onClick={closeMenu}
            >
              {applyLink.label}
            </ButtonLink>
          </div>
        </div>
      </dialog>
    </header>
  );
}
