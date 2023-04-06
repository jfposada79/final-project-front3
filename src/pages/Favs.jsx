import { useContext, useState, useEffect } from "react"
import { DentistContext } from "../context/DentistsContext"
import "../styles/favs.css"
const Favs = () => {
  const { state, dispatch } = useContext(DentistContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalDentists = state.favsDentist.length

    setTotal(totalDentists)
  }, [state.favsDentist])

  const deleteDentist = (item) => {
    dispatch({ type: "REMOVE_FAVS", payload: item })
  }

  return (
    <main className='contenedor'>
      <h1 className='heading'>Dentistas Favoritos</h1>
      <div className='contenidoo'>
        <div className='fav-container'>
          <h2>Dentistas</h2>
          {state.favsDentist?.length === 0
            ? "No hay dentistas favoritos"
            : state.favsDentist?.map((item) => (
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
                    onClick={() => deleteDentist(item)}
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
