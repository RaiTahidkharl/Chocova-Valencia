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
      <h2 className="font-serif text-3xl text-primary-text md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-primary-text/75">
          {subtitle}
        </p>
      )}
    </div>
  );
}
