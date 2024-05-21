import { Carrousel } from './Components/Carrousel'
import { Edge } from './Components/Edge'
import { Marcas } from './Components/Marcas'
import { NavBar } from './Components/NavBar'
import { Shop } from './Components/Shop'
import './style/Navbar.css'
import './style/Slider.css'

export const App = () => {
  return (
    <>
       <NavBar></NavBar>
       <Carrousel></Carrousel>
       <Marcas></Marcas>
       <Shop></Shop>
       <Edge></Edge>
    </>
  )
}
