"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

// The theme lives on <html data-theme>, set before first paint by the inline
// script in the root layout. Reading it through an external store keeps every
// toggle on the page in sync and avoids a hydration mismatch.
function subscribe(callback) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.dataset.theme === "dark";
const getServerSnapshot = () => null;

export default function ThemeToggle({ className = "" }) {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  function toggle() {
    const next = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked (private mode); the choice still applies for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Dark mode"
      aria-pressed={isDark === null ? undefined : isDark}
      className={`grid size-11 shrink-0 place-items-center rounded-full text-fg transition-colors hover:bg-fg/10 ${className}`}
    >
      <Moon className="size-5 dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-5 dark:block" aria-hidden="true" />
    </button>
  );
}
