import { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext"
import "../styles/footer.css"

const Footer = () => {
  const { stateDark } = useContext(DarkModeContext)
  return (
    <footer className={stateDark.isDark ? "footer-dark" : "footer"}>
      <h4>Final Project FronEnd III</h4>
      <a href='http://fernandoposada.tech/' target='_blank' rel='noreferrer'>
        <span>fernandoposada.tech</span>
      </a>
      <h5>Web Site useContext & useReducer</h5>
    </footer>
  )
}

export default Footer
