import React, { useMemo, useState } from "react"
import SelectContext from "./context"

function Select({ children, value }) {
  const [selectedValue, setSelectedValue] = useState(value)
  const context = useMemo(
    () => ({
      setValue: setSelectedValue,
      value: selectedValue,
    }),
    []
  )
  return (
    <SelectContext.Provider value={context}>{children}</SelectContext.Provider>
  )
}

export default Select
