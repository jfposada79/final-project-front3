import { useContext } from "react"
import "../styles/darkmode.css"
import { DarkModeContext } from "../context/DarkModeContext"

import dark from "../../public/img/dark.svg"
import light from "../../public/img/light.svg"

const DarkMode = () => {
  const { stateDark, dispatch } = useContext(DarkModeContext)
  const handleDarkMode = () => {
    dispatch({ type: "SWITCH_MODE" })
  }
  return (
    <div className='container-mode'>
      <aside onClick={handleDarkMode}>
        <img
          src={dark}
          alt='dark'
          className={stateDark.isDark ? "hidden" : ""}
        />
        <img
          src={light}
          alt='light'
          className={stateDark.isDark ? "" : "hidden"}
        />
      </aside>
      {/* <Switch
        checked={stateDark.isDark}
        onChange={handleDarkMode}
        inputProps={{ "aria-label": "controlled" }}
      /> */}
    </div>
  )
}

export default DarkMode
