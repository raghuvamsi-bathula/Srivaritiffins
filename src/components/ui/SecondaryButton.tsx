import type{ ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const SecondaryButton = ({
  children,
  onClick,
}: SecondaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
      rounded-full
      border-2
      border-orange-500
      px-8
      py-4
      font-medium
      text-orange-500
      transition
      duration-300
      hover:bg-orange-500
      hover:text-white
      "
    >
      {children}
    </button>
  );
};

export default SecondaryButton;