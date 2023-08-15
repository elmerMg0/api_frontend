import { useState } from "react"

const initialState = {
    fechaInicio: '',
    fechaFin: '',
    usuarioId: ''
}

const SeekerSales = ( { getSaleDetails, users, setInfoSeeker }) => {

    const [infoSearchSales, setInfoSearchSales] = useState(initialState)

    const handleOnChange = (e) => {
        setInfoSearchSales({...infoSearchSales, [e.target.name]: e.target.value});
        //setInfoSeeker(infoSearchSales);
    }

    const handleSearch = () => {
        const pageNumber = 1;
        setInfoSeeker(infoSearchSales)
        getSaleDetails(pageNumber, infoSearchSales);
    }

  return (
    <div className="report-header-seekers">
            <div className="d-flex flex-column">
                <label htmlFor="">Fecha Inicio</label>
                 <input  name="fechaInicio" value={infoSearchSales.fechaInicio} type="date" onChange={handleOnChange}/>
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="">Fecha Fin</label>
                <input  name="fechaFin" value={infoSearchSales.fechaFin} type="date" onChange={handleOnChange}/>
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="">Usuario</label>
                <select className="report-header-select" name="usuarioId"  value={infoSearchSales.usuarioId} onChange={handleOnChange}>
                    <option >Seleccione un usuario</option>
                    {
                        users && users.length > 0 &&
                        users.map(user => <option key={user.id} value={user.id}>{user.nombres}s</option>)
                    }
                    <option value="todos">Todos</option>
                    </select>
                </div>
            <div className="d-flex flex-column justify-content-end">
                <button className="btn-new" on onClick={handleSearch}>Buscar</button>
            </div>
        </div>
  )
}
export default SeekerSales