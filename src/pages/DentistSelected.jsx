import { useLoaderData } from "react-router-dom"

export async function loader({ params }) {
  const { id } = params

  const dentist = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  return dentist.json()
}
const DentistSelected = () => {
  const dentistSelected = useLoaderData()
  const { id, name, email, phone, website } = dentistSelected

  return (
    <div className='dentist'>
      <div className='contenido'>
        <h3>{name}</h3>
        <p className='data'> Email: {email}</p>
        <p className='data'>Phone: {phone}</p>
        <p className='website'> Website: {website}</p>
        <button>Agregar a Favoritos</button>
      </div>
    </div>
  )
}

export default DentistSelected
