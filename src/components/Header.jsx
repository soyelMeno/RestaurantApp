import { Link } from 'react-router-dom'


const Header = ()=>{
    function openNav(){
        console.log("abriendo")
        document.getElementById("mobile-menu").style.width = "100%";
      }
      
      function closeNav(){
        console.log("cerrando")
        document.getElementById("mobile-menu").style.width = "0%";
      }
    return (
        <>
        <div className="header">
            <div className="logo">
                <img src="https://firebasestorage.googleapis.com/v0/b/restaurant-48f39.appspot.com/o/Imagen1.png?alt=media&token=7c33f2a1-75ba-4164-a6c4-3e5871ae0c65" alt="Logo de la marca"/>
            </div>
            <nav>
               <ul className="nav-links enlaces">
                    <li className='enlaces'><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservas">Reservar</Link></li>
               </ul>            
            </nav>
            <button onClick={()=>{openNav()}} className="menu elementoHeader" href="">Menu</button>

            <div id="mobile-menu" className="overlay">
                <a onClick={closeNav} href="" className="close">&times;</a>
                <div className="overlay-content">
                    <a><Link to="/">Home</Link></a>
                    <a><Link to="/Reservas">Reservar</Link></a>
                    <a><Link to="/menu">Menú</Link></a>
                </div>
            </div>
            </div>
        </>
    )
}
export default Header