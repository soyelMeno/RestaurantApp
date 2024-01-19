import { useEffect, useState } from "react"
import { db } from "../assets/db"
import { getDocs, collection } from "firebase/firestore/lite"

function Platillos() {
  //Lo inicializamos vacio
  const [menu, setMenu] = useState([])

  useEffect(()=>{
    getMenu()
  },[])

    async function getMenu() {
        const menuCol = collection(db, 'menu');
        const menuSnapshot = await getDocs(menuCol);
        const platillosList = menuSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMenu(platillosList);
        console.log(platillosList)
      }


  return (
    <>
      <div className="mostrador">
        <h1 className="h1Menu">Nuestro menú</h1>
        {
          menu.map((platillo,index)=>{
            return(
              <div class="card" key={index}>
                <div class="card-body">
                  <h5 class="card-title tituloPlatillo">{platillo.platillo}</h5>
                  <div className="row">
                  <img className="col-md-4"
                  src="https://firebasestorage.googleapis.com/v0/b/restaurant-48f39.appspot.com/o/Recurso%2010rellenos.png?alt=media&token=798465a2-40e0-49af-a100-f3fe334e3b85"></img>
                  <p class="card-text col-md-8">{platillo.descripcion}</p>
                  </div>
                  <p className="card-text col-md-12 precio">${platillo.precio}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Platillos

/*

      <div className="mostrar">
      {
        menu.map((platillo,index) => {
            return (
              
                <div className='card' key={index}>
                  <h3 className="tituloPlatillo">{platillo.platillo}</h3>
                  <img 
                  src="https://firebasestorage.googleapis.com/v0/b/restaurant-48f39.appspot.com/o/Recurso%2010rellenos.png?alt=media&token=798465a2-40e0-49af-a100-f3fe334e3b85"></img>
                  <h2 className="descripcionCard">{platillo.descripcion}</h2>
                  <h2 className="precioCard">{platillo.precio}</h2>
                </div>
              
            )
        })
      }
        </div>
    
    </>
  )
  */