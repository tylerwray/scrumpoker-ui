import React from "react"
import { node, bool, func, oneOf, string } from "prop-types"

const BASE =
  "text-white border-white rounded-lg border-2 flex justify-center items-center cursor-pointer select-none"
const SIZES = {
  sm: "w-16 h-24 text-3xl",
  lg: "w-48 h-64 text-6xl",
}

const Card = ({
  children,
  revealed = true,
  onClick,
  size = "lg",
  color = "bg-red-400",
}) => (
  <button onClick={onClick} className={`${BASE} ${SIZES[size]} ${color}`}>
    {revealed && children}
  </button>
)

Card.propTypes = {
  children: node.isRequired,
  revealed: bool,
  onClick: func,
  size: oneOf(["sm", "lg"]),
  color: string,
}

export default Card
