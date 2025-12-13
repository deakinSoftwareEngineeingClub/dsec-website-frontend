import React from 'react';

type ButtonVariant = "primary" | "secondary" | "outline" | "transparent" | "accent" | "accent2";

export default function Button({
       onClick,
       type = "primary",
       className = "",
       disabled = false, // Added default value
       children,
   }: {
    onClick?: () => void;
    type?: ButtonVariant;
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
}) {

    const variants: Record<ButtonVariant, string> = {
        primary: "bg-primary",
        secondary: "bg-secondary",
        accent: "bg-accent",
        accent2: "bg-accent2",
        outline: "border border-foreground",
        transparent: ""
    };

    const baseStyles = "flex items-center justify-center px-2 font-cta min-h-[15px] aspect-[5/1] rounded-[66px] pointer-events-auto cursor-pointer";
    const sizingStyles = "text-sm h-[30px] lg:text-base lg:h-[40px]"

    const final = `
        ${baseStyles}  
        ${sizingStyles}
        ${variants[type]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
    `;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={final}
        >
            {children}
        </button>
    );
}