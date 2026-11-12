import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60";

const sizes = {
  md: "min-h-11 px-5 text-[0.9375rem]",
  lg: "min-h-12 px-7 text-base",
};

const variants = {
  primary:
    "bg-accent text-on-accent hover:bg-[color-mix(in_srgb,var(--accent)_86%,white)]",
  outline: "border border-fg/35 text-fg hover:bg-fg/10",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className = "",
} = {}) {
  return `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}) {
  return (
    <Link
      href={href}
      className={buttonClasses({ variant, size, className })}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant,
  size,
  className,
  children,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}
