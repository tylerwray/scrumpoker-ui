import React, { useContext } from "react"
import SelectContext from "./context"

function Option({ children, value }) {
  const { setValue } = useContext(SelectContext)

  return (
    <button
      onClick={() => setValue(value)}
      key={c}
      className="flex justify-center items-center m-4 cursor-pointer"
    >
      {children}
    </button>
  )
}

export default Option
