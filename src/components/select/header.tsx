import React from "react"

function Header({ children }) {
  return (
    <div className="pl-2">
      <h3>{children}</h3>
      <hr className="bg-gray-700" />
    </div>
  )
}

export default Header
