import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-pink text-primary-text hover:bg-accent-pink/85 shadow-sm",
  secondary:
    "border-2 border-primary-text text-primary-text hover:bg-muted-pink/60",
  ghost:
    "text-primary-text underline-offset-4 hover:underline",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all ${variants[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
