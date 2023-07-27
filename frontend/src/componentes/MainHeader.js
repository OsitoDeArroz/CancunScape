import React from "react";
import Encabezado from "./Encabezado";
import EncabezadoLogin from "./EncabezadoLogin";
import { useAuth } from './AuthContext';

function MainHeader() {
  const { user } = useAuth();

  // Check if there is a logged-in user, then render EncabezadoLogin, else render Encabezado
  return user ? <EncabezadoLogin /> : <Encabezado />;
}

export default MainHeader;
