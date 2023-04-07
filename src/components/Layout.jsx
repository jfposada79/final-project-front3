import { Link, Outlet } from "react-router-dom"
import logo from "../../public/img/logo.png"
import Navegation from "./Navegation"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import DarkMode from "./DarkMode"
import { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext"

const Layout = () => {
  const { stateDark } = useContext(DarkModeContext)
  return (
    <header className={stateDark.isDark ? "header-dark" : "header"}>
      <DarkMode />
      <div className='contenedor barra'>
        <Link to='/'>
          <img src={logo} alt='logo' className='logo' />
        </Link>
        <Navegation />
        <Outlet />
        <ToastContainer />
      </div>
    </header>
  )
}

export default Layout
