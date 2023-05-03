import React, { useEffect, useState } from "react";
import "../../../styles/pointOfSale.css";
import PosCategories from "./PosCategories";
import PosProducts from "./PosProducts";
import PosAcount from "./PosAcount";
import PosPay from "./PosPay";
import { APISERVICE } from "../../../services/api.services";
import { useSelector, useDispatch } from "react-redux";
import { updateCarrito, deleteCarrito } from "../../../redux/states/carrito";
import { Toaster, toast } from "react-hot-toast";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ModalCollectMoney from "./ModalCollectMoney";
import ViewerPrint from "./ViewerPrint";
const PointOfSale = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const orderDetail = useSelector((store) => store.carrito.orderDetail);
  const userId = useSelector((store) => store.user.id);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPaid, setTotalPaid] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [payType, setPayType] = useState("");
  const [showModalStartPeriod, setShowModalStartPeriod] = useState(false);
  const [existsPeriodActive, setExistsPeriodActive] = useState(false);
  const [showViewer, setShowViewer] = useState(false);
  const [infoSale, setInfoSale] = useState(0);

  useEffect(() => {
    getCategories();
    getCustomers();
  }, []);
  useEffect(() => {
    settotalPrice();
  }, [orderDetail]);

  const getCustomers = async () => {
    let url = "cliente/";
    const response = await APISERVICE.get(url);
    setCustomers(response.customers);
  };

  const getCategories = async (pageNumber = 1) => {
    let url = "categoria/?";
    let params = `page=${pageNumber}`;
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
    }
    setCategories(response.pageInfo.categories);
  };

  const getProducts = async (idCategory) => {
    let url = "categoria/get-products-by-category/?";
    let params = `idCategory=${idCategory}`;
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
    }
    setProducts(response.products);
  };

  const addProductOrder = (product) => {
    dispatch(updateCarrito(product));
  };

  const createSale = async (value) => {
    let customerId = 5;
    let totalPaidSum = totalPaid + value;
    if (totalPaidSum >= totalPrice && totalPrice > 0) {
      console.log("pagado");
      let url = "venta/create/?";
      let params = `userId=${userId}&customerId=${customerId}`;
      let body = {
        orderDetail,
        cantidadTotal: totalPrice,
        cantidadPagada: totalPaidSum,
        estado: "pagado",
        tipoPago: payType.length > 0 ? payType : "efectivo",
      };

      const { success, sale } = await APISERVICE.post(body, url, params);
      if (success) {
        setShowViewer(true);
        setInfoSale(sale);
        toast.success("Pedido enviado correctamente");
        //generatePDF();
        setShowModal(false);
      }
    } else {
      setTotalPaid(totalPaid + value);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [80, 200],
    });
    doc.setFontSize(20);
    doc.text("Numero de Pedido: 12", 15, 15);
    doc.setTextColor(100);

    const headers = [["Nombre", "Cantidad", "Precio Total"]];

    const data = orderDetail.map((prod) => {
      let total = prod.cantidad * prod.precio_venta;
      return [prod.nombre, prod.cantidad, total];
    });

    doc.autoTable({
      head: headers,
      body: data,
      startY: 30,
    });
    doc.text(
      `Total a pagar: ${totalPrice}`,
      doc.internal.pageSize.width - 20,
      doc.internal.pageSize.height - 10,
      { align: "right" }
    );
    doc.save(`${totalPrice}pedido.pdf`);
  };

  const settotalPrice = () => {
    setTotalPrice(
      orderDetail.reduce(
        (ac, prod) => ac + prod.cantidad * prod.precio_venta,
        0
      )
    );
  };

  const cleanCarrito = () => {
    dispatch(deleteCarrito());
        setTotalPaid(0);
        setPayType('');
  };

  return (
    <div className="point-of-sale">
      <div className="pos-content">
        <PosAcount totalPrice={totalPrice} totalPaid={totalPaid} />
        <PosCategories categories={categories} getProducts={getProducts} />
        <PosProducts products={products} addProductOrder={addProductOrder} />
      </div>
      <PosPay
        createSale={createSale}
        totalPrice={totalPrice}
        totalPaid={totalPaid}
        setTotalPaid={setTotalPaid}
        setShowModal={setShowModal}
      />
      <ModalCollectMoney
        showModal={showModal}
        totalPrice={totalPrice}
        setShowModal={setShowModal}
        customers={customers}
        createSale={createSale}
        setPayType={setPayType}
      />
      <Toaster />
      {showViewer && (
        <ViewerPrint infoSale={infoSale} setShowViewer={setShowViewer} cleanCarrito={cleanCarrito}/>
      )}
    </div>
  );
};

export default PointOfSale;
