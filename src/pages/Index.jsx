import { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext"
const Index = () => {
  const { stateDark } = useContext(DarkModeContext)
  return (
    <div>
      <p className={stateDark.isDark ? "welcome-dark" : "welcome"}>
        Bienvenidos a nuestra clínica dental, donde nos dedicamos a ofrecer el
        mejor cuidado bucal para ti y tu familia. Nuestro equipo de dentistas
        altamente capacitados y experimentados están aquí para proporcionarte el
        mejor tratamiento posible y ayudarte a lograr una sonrisa saludable y
        hermosa.
      </p>
    </div>
  )
}

export default Index
