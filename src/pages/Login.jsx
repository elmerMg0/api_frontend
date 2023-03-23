import React from 'react';
import '../styles/Login.css';

function Login() {
  return (
    <div className="container-login">
      <form>
        <h2>Iniciar sesión</h2>
        <div className="input-field">
          <input type="text" id="username" required />
          <label htmlFor="username">Nombre de usuario</label>
        </div>
        <div className="input-field">
          <input type="password" id="password" required />
          <label htmlFor="password">Contraseña</label>
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
