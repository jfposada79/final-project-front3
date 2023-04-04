import { Link } from "react-router-dom"

const Navegation = () => {
  return (
    <nav className='navegacion'>
      <Link to='/home'>Home</Link>

      <Link to='/contact'>Contact</Link>
      <Link to='/favs'>Favorites</Link>
    </nav>
  )
}

export default Navegation
