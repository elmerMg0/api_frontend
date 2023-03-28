import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import CustomerCrud from '../components/administrator/customer/CustomerCrud'
import User from "../components/administrator/user/User";

const ContentDashboard = () => {
    //aqui todos los componente customers, users, products, etc
  return (

    <React.Fragment>
          <section>
              <Routes>
                  <Route path="/" element={<h1>hola</h1>} />
                  < Route path='/login' element={<Login />} />
                  <Route path="/customer" element={<CustomerCrud/>}/>
                  <Route path="user" element={<User />} />

              </Routes>
          </section>
    </React.Fragment>

  )
}

export default ContentDashboard