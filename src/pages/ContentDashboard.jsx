<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import CustomerCrud from '../components/administrator/customer/CustomerCrud'
import User from "../components/administrator/user/User";

=======
import CustomerCrud from '../components/administrator/customer/CustomerCrud'
import CategoryCrud from '../components/administrator/category/CategoryCrud'
import { useSelector } from 'react-redux'
import ProductCrud from '../components/administrator/product/ProductCrud'
>>>>>>> origin/elmer
const ContentDashboard = () => {
    //aqui todos los componente customers, users, products, etc
 
  const view = useSelector(store => store.dashboard )

  return (
<<<<<<< HEAD

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

=======
    <>
      {
        view === 'customer' && <CustomerCrud/>
      }
      {
        view === 'category' && <CategoryCrud/>
      }
       {
        view === 'product' && <ProductCrud/>
      }    
    </>
>>>>>>> origin/elmer
  )
}

export default ContentDashboard