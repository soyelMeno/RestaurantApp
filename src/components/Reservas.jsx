import { useState } from "react"
import { db } from "../assets/db"
import { addDoc, collection } from "firebase/firestore/lite"
import { useEffect } from "react"

function Reservas(){
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

    
  }
const getFecha= ()=>{
    var hoy = new Date();
        var dd = String(hoy.getDate()).padStart(2, '0');
        var mm = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son de 0 a 11
        var yyyy = hoy.getFullYear();

        hoy = yyyy + '-' + mm + '-' + dd;
        console.log(hoy)
        // Establece la fecha mínima en el campo de entrada de fecha
        document.getElementById('fecha').min = hoy;
        return hoy
  }
  useEffect(()=>{
    getFecha()
  },[])
    
  
  
  return (
    <>
    <div className="containerRes">
      <div className="formularioContainer ">
        <form className="col-md-12 ">
          <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="Ingresa tu nombre"/>
          </div>
          <div class="form-group">
        <label for="email">Correo electrónico:</label>
        <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo electrónico"/>
          </div>
          <div class="form-group">
        <label for="quantity">Cantidad:</label>
        <input type="number" class="form-control" id="quantity" placeholder="Ingresa la cantidad"/>
          </div>
            <div class="form-inline">
            <div class="form-group mr-2">
        <label for="date">Fecha:</label>
        <input type="date" class="form-control ml-2" id="fecha" data-provide="datepicker" placeholder="Selecciona la fecha" min={getFecha}/>
            </div>
            
          </div>
          <div className="row justify-content-center">
            <button type="submit" class="btn btn-primary col-md-4 btnEnviar">Enviar</button>
          </div>
        </form>
      </div>
      <div className="imagenContainer">
        
      </div>
        
    </div>
    
    </>
  )
}

export default Reservas
