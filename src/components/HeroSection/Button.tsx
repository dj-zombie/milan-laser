import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  const baseClasses =
    "px-8 py-4 font-semibold rounded-full transition-all duration-300 text-lg transform hover:scale-105";
  const variantClasses =
    variant === "primary"
      ? "bg-white text-black hover:bg-opacity-90"
      : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black";

  return (
    <button className={`${baseClasses} ${variantClasses}`}>{children}</button>
  );
};
