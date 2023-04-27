import { useState } from "react";
import {Table} from 'react-bootstrap'
import ReportTableRow from './ReportTableRow'
import Paginador from './../../global/paginador/Paginator'

const initialState = {
    fechaInicio: "",
    fechaFin: "",
    usuarioId: ''
}

const ReportTable = ( {salesByDay, getSalesByDay, users, pageInfoUsers} ) => {

    const [infoSearchSales, setInfoSearchSales] = useState(initialState)

    const handleSearch = () => {
        console.log(infoSearchSales);
        getSalesByDay(infoSearchSales)
    }

    const handleOnChange = (e) => {
        setInfoSearchSales({...infoSearchSales, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <div className="report-header-seekers">
            <input  name="fechaInicio" value={infoSearchSales.fechaInicio} type="date" onChange={handleOnChange}/>
            <input  name="fechaFin" value={infoSearchSales.fechaFin} type="date" onChange={handleOnChange}/>
            <select name="usuarioId"  value={infoSearchSales.usuarioId} onChange={handleOnChange}>
                <option >Seleccione un usuario</option>
                {
                    users && users.length > 0 &&
                    users.map(user => <option key={user.id} value={user.id}>{user.nombres}s</option>)
                }
                <option value="todos">Todos</option>
            </select>
            <button className="btn-main" on onClick={handleSearch}>Buscar</button>
        </div>
        <Table>
            <thead>
                <tr>
                    {/* <th>Id</th> */}
                    <th>Fecha</th>
                    <th>Usuario</th>
                    <th>Cantidad Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    salesByDay && salesByDay.length > 0 ? 
                        salesByDay.map( sale => <ReportTableRow key={sale.id+sale.cantidad} sale={sale}/>)
                    :
                    <tr>
                        <td colSpan={3}>No existen ventas!</td>
                    </tr>
                }
                {
                    salesByDay.length > 0 &&  <tr>
                    <td colSpan={3}>
                        <Paginador pageInfo={pageInfoUsers}/>
                    </td>
                </tr>
                }
               
            </tbody>
        </Table>
    </div>
  )
}
export default ReportTable