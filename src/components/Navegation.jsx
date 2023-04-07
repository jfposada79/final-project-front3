import { useContext } from "react"
import { Link } from "react-router-dom"
import { DarkModeContext } from "../context/DarkModeContext"

const Navegation = () => {
  const { stateDark } = useContext(DarkModeContext)
  return (
    <nav className={stateDark.isDark ? "navegacion-dark" : "navegacion"}>
      <Link to='/home'>Home</Link>

      <Link to='/contact'>Contact</Link>
      <Link to='/favs'>Favorites</Link>
    </nav>
  )
}

export default Navegation
