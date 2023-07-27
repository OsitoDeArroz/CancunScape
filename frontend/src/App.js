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
import Administrador from './Paginas/admin/tourAdmin';
import Usuariosadmin from './Paginas/admin/usuariosAdmin';
import Reservasadmin from './Paginas/admin/reservasAdmin';
import Loginadmin from './Paginas/admin/loginAdmin';
import Descripcionpromociones from './componentes/Descripcionpromociones';
import Perfil from './Paginas/perfil';
import CarritoNoLogin from './componentes/CarritoNoLogin';
import Reservas from './componentes/Reservas';

function App() {

  return (
    <>
      <div className="app app-container main">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/paquetes' element={<Paquetes />}></Route>
            <Route path='/reservas' element={<Reservas />}></Route>
            <Route path='/promociones' element={<Promociones />}></Route>
            <Route path='/nosotros' element={<Nosotros />}></Route>
            <Route path='/descripcionpromociones/:id' element={<Descripcionpromociones />}></Route>
            <Route path='/descripcion/:id' element={<DescripcionTour />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/perfil' element={<Perfil />}></Route>
            <Route path='/registro' element={<Registro />}></Route>
            <Route path='/carrito/:id' element={<Carrito />} ></Route>
            <Route path='/carrito' element={<CarritoNoLogin />} ></Route>
            <Route path='/admin/paquetes' element={<Administrador />}></Route>
            <Route path='/admin/usuarios' element={<Usuariosadmin />}></Route>
            <Route path='/admin/reservas' element={<Reservasadmin />}></Route>
            <Route path='/admin/login' element={<Loginadmin />}></Route>
            <Route path='/pago' element={<Usuariosadmin />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
