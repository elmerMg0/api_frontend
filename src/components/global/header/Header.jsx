import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import user from '../../../assets/svg/user.svg'
import chevronDown from '../../../assets/svg/chevronDown.svg'
import { resetUser, UserKey } from '../../../redux/states/user'
import { clearLocalStorage } from '../../../utilities/localStorage.utility'
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../../models/routes'
const Header = () => {

  const { username } = useSelector(store => store.user)
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpenModal = () => {
    setShow(!show);
  }

  const handleLogOut = () => {
    dispatch(resetUser());
    clearLocalStorage(UserKey);
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }

  return (
    <div className='header'>
        <h5>Bussines Name</h5>
        <div className='header-user'>
          <h5>Hola, {username} </h5>
          <img src={user} alt='user-icon' />
          <img  onClick={() => handleOpenModal()} src={chevronDown} alt="down-icon" />
          {
            show && <div className='header-user__menu'>
              <div className='header-user__text'>
                <h5>Signed in as</h5>
                <h5>{username}</h5>
              </div>
                <h5 className='header-user__text'>Cerrar caja</h5>
                <h5 className='header-user__text' onClick={handleLogOut}>LogOut</h5>
            </div>
          }
        </div>
    </div>
  )
}

export default Header