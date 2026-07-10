import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  onDark = false,
}: {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-[0.72rem] font-semibold uppercase tracking-[0.28em]",
        onDark ? "text-[#E4D3AC]" : "text-[#B8934B]",
        className
      )}
    >
      {children}
    </p>
  );
}

export function DiamondDivider({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto my-5 h-px w-16",
        onDark ? "bg-[#E4D3AC]" : "bg-[#B8934B]",
        className
      )}
    >
      <span
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-1.5 text-[0.5rem]",
          onDark ? "bg-[#16233F] text-[#E4D3AC]" : "bg-[#FAF6EF] text-[#B8934B]"
        )}
      >
        ◆
      </span>
    </div>
  );
}

export function SectionTitle({
  children,
  className,
  onDark = false,
}: {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <h2
      className={cn(
        "font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] font-normal leading-tight",
        onDark ? "text-[#FAF6EF]" : "text-[#16233F]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionLead({
  children,
  className,
  onDark = false,
}: {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <p
      className={cn(
        "mx-auto mt-4 max-w-2xl text-base leading-relaxed",
        onDark ? "text-[rgba(250,246,239,0.65)]" : "text-[#5B564C]",
        className
      )}
    >
      {children}
    </p>
  );
}

type ButtonVariant = "gold" | "primary" | "outline" | "outlineDark";

const buttonStyles: Record<ButtonVariant, string> = {
  gold:
    "bg-gradient-to-br from-[#CDA85E] to-[#B8934B] text-[#141F38] font-semibold shadow-[0_10px_26px_rgba(184,147,75,0.3)] hover:brightness-105 hover:-translate-y-px border-none",
  primary: "bg-[#16233F] text-[#FAF6EF] hover:bg-[#1E3059] border-transparent",
  outline:
    "border border-[#16233F] text-[#16233F] hover:bg-[#16233F] hover:text-[#FAF6EF] bg-transparent",
  outlineDark:
    "border border-[#E4D3AC] text-[#E4D3AC] hover:bg-[#E4D3AC] hover:text-[#16233F] bg-transparent",
};

export function ClassicButton({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 rounded-[2px] px-8 py-3.5 text-[0.82rem] font-medium uppercase tracking-[0.14em] transition duration-300",
    buttonStyles[variant],
    className
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export function SectionShell({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative py-24 md:py-28", className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  onDark = false,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-14 max-w-2xl text-center", className)}>
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <DiamondDivider onDark={onDark} />
      <SectionTitle onDark={onDark}>{title}</SectionTitle>
      {lead ? <SectionLead onDark={onDark}>{lead}</SectionLead> : null}
    </div>
  );
}
