import React from "react";
import Header from "../components/global/header/Header";
import Navegation from "../components/global/header/Navegation";
import CustomerCrud from '../components/administrator/customer/CustomerCrud'
const Dashboard = () => {
  return (
    <>
      <Header />
      <Navegation/>
      <div>Dashboard</div>
      <CustomerCrud/>
    </>
  );
};

export default Dashboard;
