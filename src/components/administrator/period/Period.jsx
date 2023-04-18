import React, { useState } from 'react'
import BoxOpening from './BoxOpening'
import '../../../styles/period.css'
import { APISERVICE } from '../../../services/api.services'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../../redux/states/user'
import BoxClosing from './BoxClosing'
const Period = () => {

  const user = useSelector(store => store.user);
  const periodUser = useSelector(store => store.user.periodUser); 
  const dispatch = useDispatch();
  const [infoBoxClose, setInfoBoxClose] = useState({});

  const openBox =  async ( initialAmount ) => {
    let url = 'periodo/start-period/?'
    let params = `userId=${user.id}`;
    const { period , success} = await APISERVICE.post({cajaInicial:initialAmount}, url, params);
    if(success){
      const periodData = {
        periodUser: {
          id: period.id,
          state: period.estado
        }
      }
      dispatch(updateUser( periodData ));
      getDetailPeriod();
    }
  }

  const closeBox = () => {

  }

  const getDetailPeriod = async () => {
    let url = 'periodo/get-detail-period/?';
    let params = `idUser=${user.id}&idPeriod=${periodUser.id}`
    const { success, info} = await APISERVICE.get(url, params);
    if( success) {
      setInfoBoxClose(info);
    }
  }

  return (
      <div className='period'>
        {
          periodUser && periodUser.state ?
          <BoxClosing closeBox={closeBox} infoBoxClose={infoBoxClose}/>
          :
          <BoxOpening openBox={openBox}/>
        }
      </div> 
  )
}

export default Period