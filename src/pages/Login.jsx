import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/states/user';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { APISERVICE } from '../services/api.services';
import { toast, Toaster} from 'react-hot-toast'
const initialState = {
    username: '',
    password: ''
}

function Login() {

  const [user, setUser] = useState( initialState )
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSUbmit = async (e) => {
    let url = 'usuario/login/'
    const response = await APISERVICE.post(user, url )
    if( response.success ){
      let userLoged = {
        username: user.username,
        accessToken: response.accessToken
      }
      dispatch( createUser( userLoged ));
      navigate('/dashboard')
      toast.success(response.message);
    }else{
      console.log(response)
      toast.error(response.message);
    }
  }

  const handleOnChange = (e) => {
    setUser( {
      ...user, [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container-login">
      <div className='login'>
        <h2>Iniciar sesión</h2>
        <div className="input-field">
          <input onChange={handleOnChange}  value={user.username} name='username' type="text" id="username" required />
          <label htmlFor="username">Nombre de usuario</label>
        </div>
        <div className="input-field">
          <input onChange={handleOnChange} value={user.password} name='password' type="password" id="password" required />
          <label htmlFor="password">Contraseña</label>
        </div>
        <button onClick={handleSUbmit}>Iniciar sesión</button>
      </div>
      <Toaster/>
    </div>
  );
}

export default Login;
