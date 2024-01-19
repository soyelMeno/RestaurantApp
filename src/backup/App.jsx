import { useState } from "react"
import { db } from "./assets/db"
import { addDoc, collection } from "firebase/firestore/lite"
import Platillos from './components/Platillos'

function App() {
  //Lo inicializamos vacio
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [quant, setQuant] = useState(0)
  const [time, setTime] = useState('')

  const handleNameChange = (e)=>{
    setName(e.target.value)
  }

  const handleQuantChange =(e)=>{
    setQuant(e.target.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Aquí podrías manejar la lógica para enviar la reserva a tu backend o hacer alguna acción con los datos
    const newdoc = await addDoc(collection(db,"reservaciones"),{
      name: name,
      date: date,
      time: time,
      quant: quant
    })
    // Luego podrías reiniciar el estado del formulario

    
  };

  return (
    <>
  <main>
    <h2>Promoción del mes</h2>
    <p>Imagen</p>
  </main>
  <section>
    <form onSubmit={ handleSubmit}>
      <label>
        Nombre:
        <input id="name" type="text" name="name" onChange={handleNameChange}/>
      </label>
      <label>
        Cantidad de Personas:
        <input id="quant" type="number" name="quantity" onChange={handleQuantChange} />
      </label>
      <label>
        Fecha:
        <input id="date" type="date" name="date"/>
      </label>
      <label>
        Hora:
        <input id="time" type="time" name="time"/>
      </label>
      <input type="submit" value="Reservar" />
    </form>
  </section>
  <Platillos/>
    </>
  )
}

export default App
