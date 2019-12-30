import React from "react"
import noop from "../../lib/noop"

type Context = {
  value: string
  setValue: (value: string) => void
}
const SelectContext = React.createContext<Context>({
  value: "",
  setValue: noop,
})

export default SelectContext
