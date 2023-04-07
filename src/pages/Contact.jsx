import { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext"
import Form from "../components/Form"
const Contact = () => {
  const { stateDark } = useContext(DarkModeContext)
  return (
    <>
      <div>
        <h1 className={stateDark.isDark ? "heading-dark" : "heading"}>
          Contáctanos
        </h1>
        <Form />
      </div>
    </>
  )
}

export default Contact
