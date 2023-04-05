import { createContext, useState, useEffect } from "react"

export const DentistContext = createContext()
export function DentistProvider({ children }) {
  const dentistsLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("dentistFav")) ?? []
      : null
  const [dentist, setDentist] = useState(dentistsLS)
  useEffect(() => {
    localStorage.setItem("dentistFav", JSON.stringify(dentist))
  }, [dentist])
  return (
    <DentistContext.Provider
      value={{
        dentist,
        setDentist
      }}
    >
      {children}
    </DentistContext.Provider>
  )
}
