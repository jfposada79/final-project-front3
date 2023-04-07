import { useLoaderData } from "react-router-dom"
import Dentist from "../components/Dentist"
import { useContext } from "react"

import "../styles/product.css"
import { DarkModeContext } from "../context/DarkModeContext"

export async function loader() {
  const listDentists = await fetch("https://jsonplaceholder.typicode.com/users")
  return await listDentists.json()
}

const Home = () => {
  const dentists = useLoaderData()
  const { stateDark } = useContext(DarkModeContext)

  return (
    <>
      {/* <h1 className='heading'>Listado de Dentistas</h1> */}
      <h1 className={stateDark.isDark ? "heading-dark" : "heading"}>
        Listado de Dentistas
      </h1>
      <div className='dentists-grid'>
        {dentists.map((dentist) => (
          <Dentist key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </>
  )
}

export default Home
