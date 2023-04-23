import React, { useEffect, useState } from "react";
import "../../../styles/report.css";
import LinesChart from "./LinesChart";
import PiesChart from "./PiesChart";
import { APISERVICE } from '../../../services/api.services'

const dateCurrently = new Date();
const fechaHaceUnMes = new Date(dateCurrently.getFullYear(), dateCurrently.getMonth() - 1, dateCurrently.getDate());
const fechaHaceUnMesFormateada = fechaHaceUnMes.getFullYear() + '-' + (fechaHaceUnMes.getMonth() + 1).toString().padStart(2, '0') + '-' + fechaHaceUnMes.getDate().toString().padStart(2, '0');


const Report = () => {

  const [infoLineChart, setInfoLineChart] = useState({})
  const [infoPieChart, setInfoPieChart] = useState({})
  useEffect( () => {
    getInfoLineChart();
    getBestSellerProducts()
  },[])

  const getInfoLineChart = async ( body={fechaInicio: fechaHaceUnMesFormateada, fechaFin: dateCurrently, tipo: 'dia'} ) => {
    let url = 'venta/get-info-line-chart'
    const { success, salesForDay} = await APISERVICE.post(body ,url);
    if( success ){
      setInfoLineChart(salesForDay)
    }
  }

  const getBestSellerProducts = async () => {
    let url = 'detalle-venta/get-best-seller-product';
    const {success, list } = await APISERVICE.get(url);
    if ( success ){
      setInfoPieChart(list);
    } 
  }


  return (
    <div className="report">
      <h5>Reportes</h5>
      <div className="report-grafics">
          <LinesChart infoLineChart={infoLineChart} getInfoLineChart={getInfoLineChart}/>
          <PiesChart  infoPieChart={infoPieChart}/>
      </div>
    </div>
  );
};

export default Report;
