import { useContext } from "react"
import "../styles/darkmode.css"
import { DarkModeContext } from "../context/DarkModeContext"
const DarkMode = () => {
  const { stateDark, dispatch } = useContext(DarkModeContext)
  const handleDarkMode = () => {
    dispatch({ type: "SWITCH_MODE" })
  }
  return (
    <>
      <button onClick={handleDarkMode}>hi</button>
    </>
  )
}

export default DarkMode
