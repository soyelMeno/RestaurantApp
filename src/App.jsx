import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Platillos from "./components/Platillos"
import Reservas from "./components/Reservas"
import Header2 from "./components/Header2"
function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

      <div class="routesContainer">
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/menu" element={<Platillos />}></Route>
          <Route path="/reservas" element= {<Reservas />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </>
  )
}

export default App
