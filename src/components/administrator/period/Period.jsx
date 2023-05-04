import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    existsPeriodActive();
  }, [])

  useEffect(() => {
    getDetailPeriod();
  }, [periodUser])

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

  const closeBox = async ( total ) => {
    let url = 'periodo/close-period?';
    let params = `idPeriod=${periodUser.id}&idUser=${user.id}`;
    const { success } = await APISERVICE.post({totalCierreCaja: total}, url, params)
    if(success){
      dispatch(updateUser({periodUser: {}}))
    }
  }

  const getDetailPeriod = async () => {
    let url = 'periodo/get-detail-period/?';
    if(periodUser && periodUser.id !== undefined){
      let params = `idUser=${user.id}&idPeriod=${periodUser.id}`
      const { success, info} = await APISERVICE.get(url, params);
      if( success ) {
         setInfoBoxClose(info);
        }
      console.log(periodUser);
    }
  }

  const existsPeriodActive = async () => {
    let url = 'periodo/exists-period-active-by-id/?'
    let params = `idUser=${user.id}`
    const { success, period} = await APISERVICE.get(url, params);
    if(success){
      const periodData = {
        periodUser: {
          id: period.id,
          state: period.estado
        }
      }
      dispatch(updateUser( periodData ));
    }
  }
  //actionExistsPeriodActiveById}

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