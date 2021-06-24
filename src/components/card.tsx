import React, { ReactNode, MouseEvent } from "react";

const BASE =
  "text-white border-white rounded-lg border-2 flex justify-center items-center cursor-pointer select-none focus:outline-none focus:shadow-outline";

const SIZES = {
  sm: "w-16 h-24 text-3xl",
  lg: "w-48 h-64 text-huge"
};

interface Props {
  children: ReactNode;
  revealed?: boolean;
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
  size?: "sm" | "lg";
  color?: string;
}

function Card({
  children,
  revealed = true,
  onClick,
  size = "lg",
  color = "bg-red-400"
}: Props) {
  return (
    <button
      style={{ touchAction: "manipulation" }}
      onClick={onClick}
      className={`${BASE} ${SIZES[size]} ${color}`}
    >
      {revealed && children}
    </button>
  );
}

export default Card;
