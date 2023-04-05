import { useContext, useState, useEffect } from "react"
import { DentistContext } from "../context/DentistsContext"
import "../styles/favs.css"
const Favs = () => {
  const { dentist, setDentist } = useContext(DentistContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalDentists = dentist.length
    setTotal(totalDentists)
  }, [dentist])

  const deleteDentist = (id) => {
    const destistsUpdated = dentist.filter(
      (dentistState) => dentistState.id !== id
    )
    setDentist(destistsUpdated)
  }

  return (
    <main className='contenedor'>
      <h1 className='heading'>Dentistas Favoritos</h1>
      <div className='contenidoo'>
        <div className='fav-container'>
          <h2>Dentistas</h2>
          {dentist?.length === 0
            ? "No hay dentistas favoritos"
            : dentist?.map((item) => (
                <div className='dentist' key={item.id}>
                  <div>
                    <p className='nombre'>{item.name}</p>

                    <p className='data'> Email: {item.email}</p>
                    <p className='data'>Phone: {item.phone}</p>
                    <p className='website'> Website: {item.website}</p>
                  </div>
                  <button
                    type='button'
                    className='btn_eliminar'
                    onClick={() => deleteDentist(item.id)}
                  >
                    X
                  </button>
                </div>
              ))}
        </div>
        <aside className='resumen'>
          <h3>Resumen Dentistas Favoritos</h3>
          <p>Tienes un total de {total}</p>
        </aside>
      </div>
    </main>
  )
}

export default Favs
