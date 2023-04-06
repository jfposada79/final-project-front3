import { useState } from "react"
import Swal from "sweetalert2"

import "../styles/form.css"

const regex = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
)
const Form = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!regex.test(email) || fullName.length <= 5) {
      Swal.fire({
        title: "Por favor verifique su información nuevamente",
        showClass: {
          popup: "animate__animated animate__fadeInDown"
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp"
        }
      })
    } else {
      Swal.fire({
        title: `Gracias ${fullName}, te contactaremos cuanto antes vía e-mail`,
        showClass: {
          popup: "animate__animated animate__fadeInDown"
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp"
        }
      })
      e.currentTarget.reset()
      setEmail("")
      setFullName("")
    }
  }
  return (
    <form className='form-container' onSubmit={handleSubmit} noValidate>
      <div className='fullName'>
        <label htmlFor='fullName'>Nombre Completo</label>
      </div>
      <input
        type='text'
        id='fullName'
        name='fullName'
        onChange={(e) => setFullName(e.target.value)}
      />
      <div className='email'>
        <label htmlFor='email'>CorreoElectrónico</label>
      </div>
      <input
        type='email'
        id='email'
        name='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  )
}

export default Form
