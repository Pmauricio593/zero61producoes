export default function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const barFill = variant === "light" ? "#FAF6EF" : "#16233F";
  const boxFill = variant === "light" ? "#FFFFFF" : "#16233F";
  const textDark = variant === "light" ? "#101A30" : "#FAF6EF";
  const textBlue = variant === "light" ? "#1A73E8" : "#4DA6FF";

  return (
    <svg
      viewBox="0 0 240 122"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Zero61 Produções"
      className="h-12 w-auto"
    >
      <g fill={barFill}>
        <rect x="60" y="40" width="5" height="26" rx="2" />
        <rect x="71.5" y="28" width="5" height="38" rx="2" />
        <rect x="83" y="36" width="5" height="30" rx="2" />
        <rect x="94.5" y="8" width="5" height="58" rx="2" />
        <rect x="106" y="26" width="5" height="40" rx="2" />
        <rect x="117.5" y="18" width="5" height="48" rx="2" />
        <rect x="129" y="32" width="5" height="34" rx="2" />
        <rect x="140.5" y="22" width="5" height="44" rx="2" />
        <rect x="152" y="36" width="5" height="30" rx="2" />
        <rect x="163.5" y="28" width="5" height="38" rx="2" />
        <rect x="175" y="41" width="5" height="25" rx="2" />
      </g>
      <rect x="55" y="72" width="130" height="27" rx="2" fill={boxFill} />
      <text
        x="120"
        y="92.5"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="20"
        fontWeight="900"
        letterSpacing="1"
      >
        <tspan fill={textDark}>ZER</tspan>
        <tspan fill={textBlue}>O</tspan>
        <tspan fill={textDark}>61</tspan>
      </text>
      <text
        x="120"
        y="112"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing="3.5"
        fill={textDark}
      >
        PRODUCOES
      </text>
    </svg>
  );
}
