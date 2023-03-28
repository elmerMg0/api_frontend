import React from "react";
import Header from "../components/global/header/Header";
<<<<<<< HEAD
import Navegation from "../components/global/header/Navegation";
=======
import Navegation from "../components/global/navigation/Navegation";
>>>>>>> origin/elmer
import ContentDashboard from "./ContentDashboard";
const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard">
        <Navegation />
        <ContentDashboard />
      </div>

    </>
  );
};

export default Dashboard;
