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

  useEffect( () => {
    getInfoLineChart();
  },[])

  const getInfoLineChart = async ( body={fechaInicio: fechaHaceUnMes, fechaFin: dateCurrently, tipo: 'mes'} ) => {
    let url = 'venta/get-info-line-chart'
    const { success, salesForDay} = await APISERVICE.post(body ,url);
    if( success ){
      setInfoLineChart(salesForDay)
    }
  }

  return (
    <div className="report">
      <h5>Reportes</h5>
      <div className="report-grafics">
          <LinesChart infoLineChart={infoLineChart} getInfoLineChart={getInfoLineChart}/>
        <div>
          <PiesChart  />
        </div>
      </div>
    </div>
  );
};

export default Report;
