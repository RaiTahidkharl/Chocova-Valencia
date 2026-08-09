interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="font-serif text-3xl md:text-4xl text-chocolate">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-muted mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
