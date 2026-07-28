import type{ ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const PrimaryButton = ({
  children,
  onClick,
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
      rounded-full
      bg-orange-500
      px-8
      py-4
      text-white
      font-medium
      transition
      duration-300
      hover:bg-orange-600
      hover:scale-105
      "
    >
      {children}
    </button>
  );
};

export default PrimaryButton;