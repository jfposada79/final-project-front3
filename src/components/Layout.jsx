import { Link, Outlet } from "react-router-dom"
import logo from "../../public/img/logo.png"
import Navegation from "./Navegation"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Layout = () => {
  return (
    <header className='header'>
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
