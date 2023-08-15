import { useEffect, useState } from "react";
import { APISERVICE } from "../../../services/api.services";
import "../../../styles/saleHistory.css";
import TableHistory from "./TableHistory";
import SeekerSales from "./SeekerSales";
import ModalSaleDetail from "./ModalSaleDetail";
import { Pagination } from "react-bootstrap";
const SaleHistory = () => {
  const [sales, setSales] = useState([]);
  const [salesInfo, setSalesInfo] = useState({});
  const [users, setUsers] = useState([]);
  const [saleInfoModal, setSaleInfoModal] = useState({});
  const [modalProducts, setModalProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [infoSeeker, setInfoSeeker] = useState({})

  useEffect(() => {
    getUsers();
  }, []);

  /* @params numero de pagina, volver body una vriable global(fechaIni, fechaFin, usuario) */
  const getSaleDetails = async (pageNumber, body) => {
    body = body ? body : infoSeeker
    const url = "venta/get-sale-detail/?";
    const params = `page=${pageNumber}`;
    const { success, pageInfo, sales } = await APISERVICE.post(body, url, params);
    if (success) {
      setSales(sales);
      setSalesInfo(pageInfo);
    }
  };

  const getUsers = async () => {
    const url = "usuario/get-users";
    const { success, users, pageInfo } = await APISERVICE.get(url);
    if (success) {
      setUsers(users);
    }
  };

  const getSaleDetailSample = async (idSale) => {
    const url = "detalle-venta/get-sale-detail/?";
    const params = `idSale=${idSale}`;
    const { success, saleInfo, products } = await APISERVICE.get(url, params);
    if (success) {
      setSaleInfoModal(saleInfo);
      setModalProducts(products);
    }
    setShowModal(true);
  };

  return (
    <div className="sale-history">
      <h3>Historial de Ventas</h3>
      <SeekerSales getSaleDetails={getSaleDetails} users={users} setInfoSeeker={setInfoSeeker}/>
      <TableHistory
        sales={sales}
        salesInfo={salesInfo}
        getSaleDetails={getSaleDetails}
        getSaleDetailSample={getSaleDetailSample}
      />
      <ModalSaleDetail
        saleInfo={saleInfoModal}
        products={modalProducts}
        show={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};
export default SaleHistory;
