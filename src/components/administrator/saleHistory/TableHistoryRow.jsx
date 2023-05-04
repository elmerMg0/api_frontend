import trash from "../../../assets/svg/trash.svg";
import eyes from "../../../assets/svg/eyes.svg";
const TableHistoryRow = ({ sale, getSaleDetailSample }) => {

  const handleShowSale = () => {
    getSaleDetailSample( sale.id )
  }

  return (
    <tr>
      <td>{sale.numero_pedido}</td>
      <td>{ sale.fecha.slice('.', 19)}</td>
      <td>{sale.cantidad_total}</td>
      <td>{sale.usuario.username}</td>
      <td>
        <button className="btn-main" onClick={handleShowSale}>
          <img src={eyes} alt="" />
        </button>{" "}
        <button className="btn-main-red">
          <img src={trash} />
        </button>
      </td>
    </tr>
  );
};
export default TableHistoryRow;
