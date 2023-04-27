import React, { useEffect, useState } from "react";
import "../../../styles/report.css";
import LinesChart from "./LinesChart";
import PiesChart from "./PiesChart";
import { APISERVICE } from "../../../services/api.services";
import ButtonsReport from "./ButtonsReport";
import ReportTable from "./ReportTable";
const dateCurrently = new Date();
const day = dateCurrently.getDate().toString().padStart(2, '0');
const month = dateCurrently.getMonth() + 1;
const year = dateCurrently.getFullYear();


const dateCurrentlyString = year+"-" + month.toString().padStart(2, '0') +'-'+day
const lastMonthDate =  year+"-" + (month - 1).toString().padStart(2, '0') +'-'+day

const fechaHaceUnMes = new Date(
  dateCurrently.getFullYear(),
  dateCurrently.getMonth() - 1,
  dateCurrently.getDate()
);
/* const dateCurrentlyString = new Date(
  dateCurrently.getFullYear(),
  dateCurrently.getMonth(),
  dateCurrently.getDate()
); */
console.log(dateCurrently.getDate())
const fechaHaceUnMesFormateada =
  fechaHaceUnMes.getFullYear() +
  "-" +
  (fechaHaceUnMes.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  fechaHaceUnMes.getDate().toString().padStart(2, "0");

export const reports = {
    grafics: "graficos",
    ventas: "ventas"
}

const Report = () => {
  const [infoLineChart, setInfoLineChart] = useState({});
  const [infoPieChart, setInfoPieChart] = useState({});
  const [showReport, setShowReport] = useState(reports.grafics);
  const [salesByDay, setSalesByDay] = useState([])
  const [users, setUsers] = useState([])
  const [pageInfoUsers, setPageInfoUsers] = useState({})

  useEffect(() => {
    getInfoLineChart();
    getBestSellerProducts();
    getUsers();
  }, []);

  const getInfoLineChart = async (
    body = {
      fechaInicio: lastMonthDate,
      fechaFin: dateCurrentlyString,
      tipo: "dia",
    }
  ) => {
    let url = "venta/get-info-line-chart";
    const { success, salesForDay } = await APISERVICE.post(body, url);
    if (success) {
      setInfoLineChart(salesForDay);
    }else{
      setInfoLineChart({});
    }
  };

  const getBestSellerProducts = async () => {
    let url = "detalle-venta/get-best-seller-product";
    const { success, list } = await APISERVICE.get(url);
    if (success) {
      setInfoPieChart(list);
    }
  };

  const getSalesByDay = async ( body ) => {
    setSalesByDay([]);
    const url = 'venta/get-sales-by-day';
    const { success, salesForDay } = await APISERVICE.post(body, url);
    if( success ){
      setSalesByDay(salesForDay);
    }
  }

  const getUsers = async () => {
    const url = 'usuario/get-users';
    const { success, users, pageInfo} = await APISERVICE.get(url)
    if(success){
      setUsers(users);
      setPageInfoUsers(pageInfo);
    }
    console.log(users)
  }

  const grafics = (
    <div className="report-grafics">
      <LinesChart
        infoLineChart={infoLineChart}
        getInfoLineChart={getInfoLineChart}
      />
      <PiesChart infoPieChart={infoPieChart} />
    </div>
  );

  const sales = (
    <ReportTable getSalesByDay={getSalesByDay} salesByDay={salesByDay} users={users} pageInfoUsers={pageInfoUsers}/>
  )

  return (
    <div className="report">
      <h5>Reportes</h5>
      <ButtonsReport setShowReport={setShowReport} />
      { showReport === reports.grafics && grafics}
      { showReport === reports.ventas && sales}
    </div>
  );
};

export default Report;
