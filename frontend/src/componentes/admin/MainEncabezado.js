import React from "react";
import Encabezadoadministrador from "./Encabezadoadministrador";
import EncabezadoadministradorLog from "./Encabezadoadministrador";
import { useAuth } from './AuthContext';

function MainHeader() {
  const { user } = useAuth();

  // Check if there is a logged-in user, then render EncabezadoLogin, else render Encabezado
  return user ? <Encabezadoadministrador /> : <EncabezadoadministradorLog />;
}

export default MainHeader;
