import React from "react";

interface CTAButtonProps {
  /** Button text label */
  text?: string;
  /** Click handler function */
  onClick?: () => void;
  /** Button type */
  type?: "button" | "submit" | "reset";
  /** Border and text color (default: #98012E) */
  color?: string;
  /** Show arrow icon (default: true) */
  showArrow?: boolean;
  /** Custom className for additional styling */
  className?: string;
  /** Custom minimum width */
  minWidth?: string;
  /** Custom padding classes */
  padding?: string;
  /** Custom text size classes */
  textSize?: string;
  /** Custom gap between text and arrow */
  gap?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  text = "Explore more",
  onClick,
  type = "button",
  color = "#98012E",
  showArrow = true,
  className = "",
  minWidth = "160px",
      padding = "py-2.5 px-5 sm:py-2.5 sm:px-6 md:py-2.5 md:px-7 lg:py-2.5 lg:px-7",
      textSize = "text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[20px]",
  gap = "8px",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`border flex items-center justify-center hover:text-white transition-all duration-300 w-auto min-h-[44px] ${padding} ${className}`}
      style={{
        borderRadius: "60px",
        gap: gap,
        fontFamily: "Sansation, sans-serif",
        fontWeight: 400,
        borderColor: color,
        color: color,
        minWidth: minWidth,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = color;
        e.currentTarget.style.color = "white";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = color;
      }}
    >
      <span className={`${textSize} whitespace-nowrap`}>{text}</span>
      {showArrow && (
        <svg
          width="15"
          height="13"
          viewBox="0 0 15 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 w-[12px] h-[10px] sm:w-[13px] sm:h-[11px] md:w-[14px] md:h-[12px] lg:w-[14px] lg:h-[12px]"
        >
          <path
            d="M12.2412 5.62579H0.625C0.45924 5.62579 0.300269 5.69164 0.183058 5.80885C0.0658481 5.92606 0 6.08503 0 6.25079C0 6.41655 0.0658481 6.57552 0.183058 6.69273C0.300269 6.80994 0.45924 6.87579 0.625 6.87579H12.2412L7.6825 11.4333C7.56514 11.5506 7.49921 11.7098 7.49921 11.8758C7.49921 12.0418 7.56514 12.2009 7.6825 12.3183C7.79986 12.4356 7.95903 12.5016 8.125 12.5016C8.29097 12.5016 8.45014 12.4356 8.5675 12.3183L14.1925 6.69329C14.2507 6.63523 14.2969 6.56626 14.3284 6.49033C14.3599 6.4144 14.3761 6.333 14.3761 6.25079C14.3761 6.16858 14.3599 6.08718 14.3284 6.01125C14.2969 5.93532 14.2507 5.86635 14.1925 5.80829L8.5675 0.183289C8.45014 0.065931 8.29097 0 8.125 0C7.95903 0 7.79986 0.065931 7.6825 0.183289C7.56514 0.300648 7.49921 0.45982 7.49921 0.625789C7.49921 0.791759 7.56514 0.950931 7.6825 1.06829L12.2412 5.62579Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
};

