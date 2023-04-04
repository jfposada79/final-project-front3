import { Link } from "react-router-dom"
import "../styles/product.css"

const Dentist = ({ dentist }) => {
  const { id, name, email, phone, website } = dentist
  return (
    <div className='dentist'>
      <div className='contenido'>
        <h3>{name}</h3>

        <p className='data'> Email: {email}</p>
        <p className='data'>Phone: {phone}</p>
        <p className='website'> Website: {website}</p>
      </div>
      <Link to={`/home/dentist/${id}`} className='enlace'>
        Ver Dentista
      </Link>
    </div>
  )
}

export default Dentist
