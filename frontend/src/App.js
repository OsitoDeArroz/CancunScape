import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './Paginas/Inicio';
import Nosotros from './Paginas/Nosotros';
import Paquetes from './Paginas/paquetes';
import Promociones from './Paginas/promociones';
import Login from './Paginas/login';
import Footer from './componentes/Footer';
import Registro from './Paginas/registro';
import Carrito from './componentes/Carrito';
import DescripcionTour from './componentes/DescripcionTour';

function App() {
  return (
    <>
      
      <div className="app app-container main">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/paquetes' element={<Paquetes />}></Route>
            <Route path='/promociones' element={<Promociones />}></Route>
            <Route path='/nosotros' element={<Nosotros />}></Route>
            <Route path='/descripcion/:id' element={<DescripcionTour />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/registro' element={<Registro />}></Route>
            <Route path='/carrito' element={<Carrito />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
