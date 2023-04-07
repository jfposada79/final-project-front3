import { createContext, useReducer } from "react"

export const DarkModeContext = createContext()
const reducer = (stateDark, action) => {
  switch (action.type) {
    case "SWITCH_MODE":
      return { ...stateDark, isDark: !stateDark.isDark }

    default:
      return stateDark
  }
}
export function DarkModeProvider({ children }) {
  const [stateDark, dispatch] = useReducer(reducer, { isDark: false })
  return (
    <DarkModeContext.Provider value={{ stateDark, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  )
}
