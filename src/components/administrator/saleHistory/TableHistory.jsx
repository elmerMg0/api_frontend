import { Table } from "react-bootstrap";
import TableHistoryRow from "./TableHistoryRow";
import Paginador from '../../global/paginador/Paginator'
const TableHistory = ({ sales, salesInfo, getSaleDetails, getSaleDetailSample }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sales && sales.length > 0 ? (
            sales.map((sale) => {
              return <TableHistoryRow key={sale.id} sale={sale} getSaleDetailSample={getSaleDetailSample}/>;
            })
          ) : (
            <tr>
                <td colSpan={5}>No existen ventas</td>
            </tr>
          )}
          <tr>
            <td colSpan={5}>
              <Paginador pageInfo={salesInfo} getData={getSaleDetails}/>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default TableHistory;
