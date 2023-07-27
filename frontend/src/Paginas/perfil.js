import React from 'react';
import { useAuth } from '../componentes/AuthContext';

const Perfil = () => {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <h2>Bienvenido, {user.nombre_completo}!</h2>
        </div>
      ) : (
        <h2>Iniciar sesión</h2>
      )}
    </div>
  );
};

export default Perfil;
