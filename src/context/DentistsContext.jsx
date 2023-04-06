import { createContext, useState, useEffect, useReducer } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const DentistContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVS":
      if (
        state.favsDentist.some(
          (dentistState) => dentistState.id === action.payload.id
        )
      ) {
        toast.warn("Este Dentista ya hace parte de los favoritos")
        return { ...state }
      } else {
        toast.success("Dentista agregado a la lista de favoritos")
        return { ...state, favsDentist: [...state.favsDentist, action.payload] }
      }

    case "REMOVE_FAVS":
      const updatedFavs = state.favsDentist.filter(
        (item) => item.id !== action.payload.id
      )
      return { ...state, favsDentist: updatedFavs }

    default:
      return state
  }
}

export function DentistProvider({ children }) {
  const dentistsLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("dentistFav")) ?? []
      : null

  // MAKING USErEDUCER
  const [state, dispatch] = useReducer(reducer, {
    favsDentist: dentistsLS
  })

  useEffect(() => {
    localStorage.setItem("dentistFav", JSON.stringify(state.favsDentist))
  }, [state.favsDentist])

  return (
    <DentistContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </DentistContext.Provider>
  )
}
