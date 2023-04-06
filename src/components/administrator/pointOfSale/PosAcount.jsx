import React, { useState } from 'react'
import calendar from '../../../assets/svg/calendar.svg'
import clock from '../../../assets/svg/clock.svg'
import { Table } from 'react-bootstrap'
const PosAcount = () => {

  const [dateCurrently, setDateCurrently] = useState('')

  const updateDate = () => {
    let date = new Date();
    let hour = date.getHours()
    let minute = date.getMinutes();
    let second = date.getSeconds()
    let hourcurrenty = `${hour}:${minute}:${second}`
    setDateCurrently(hourcurrenty)
  }
  setInterval( ()=> {
    updateDate()
  },1000)

  return (
    <div className='pos-acount'>
      <Table>
        <thead>
          <tr>
            <th colSpan={4}>
              <img src={calendar} alt="" />
              {dateCurrently}
            </th>
          </tr>
        </thead>          
        <tbody>
          <tr>
            <td>1</td>
            <td>producto</td>
            <td>total</td>
            <td>+ -</td>
          </tr>
          <tr>
            <td>1</td>
            <td>producto</td>
            <td>total</td>
            <td>+ -</td>
          </tr>
          <tr>
            <td>1</td>
            <td>producto</td>
            <td>total</td>
            <td>+ -</td>
          </tr>
          <tr>
            <td>1</td>
            <td>producto</td>
            <td>total</td>
            <td>+ -</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default PosAcount