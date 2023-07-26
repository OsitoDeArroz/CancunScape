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
import PaquetesAdmin from './Paginas/admin/tourAdmin';
import UsuariosAdmin from './Paginas/admin/usuariosAdmin';
import ReservasAdmin from './Paginas/admin/reservasAdmin';

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
              <Route path='/carrito/:id' element={<Carrito />}></Route>
              <Route path='/toursadmin' element={<PaquetesAdmin />}></Route>
              <Route path='/usuariosadmin' element={<UsuariosAdmin />}></Route>
              <Route path='/reservasadmin' element={<ReservasAdmin />}></Route>
            </Routes>
          </BrowserRouter>
      </div>
      <Footer />

    </>
  );
}

export default App;
