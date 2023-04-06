import { useLoaderData } from "react-router-dom"
import { useContext } from "react"
import { DentistContext } from "../context/DentistsContext"

export async function loader({ params }) {
  const { id } = params

  const dentist = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  return dentist.json()
}

const DentistSelected = () => {
  const dentistSelected = useLoaderData()
  const { dispatch } = useContext(DentistContext)

  const { name, email, phone, website } = dentistSelected

  // const handleSubmit = () => {
  //   if (dentist.some((dentistState) => dentistState.id === id)) {
  //     setDentist(dentist)
  //     toast.warn("Este Dentista ya hace parte de los favoritos")
  //   } else {
  //     setDentist([...dentist, dentistSelected])
  //     toast.success("Dentista agregado a la lista de favoritos")
  //   }
  // }
  const handleSubmit = (item) => {
    dispatch({ type: "ADD_FAVS", payload: item })
  }
  return (
    <div className='dentist'>
      <div className='contenido'>
        <h3>{name}</h3>
        <p className='data'> Email: {email}</p>
        <p className='data'>Phone: {phone}</p>
        <p className='website'> Website: {website}</p>
        <button onClick={() => handleSubmit(dentistSelected)}>
          Agregar a Favoritos
        </button>
      </div>
    </div>
  )
}

export default DentistSelected
