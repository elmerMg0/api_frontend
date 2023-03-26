import React, { useState, useEffect} from 'react'
import CustomerCrud from '../components/administrator/customer/CustomerCrud'
import CategoryCrud from '../components/administrator/category/CategoryCrud'
import { useFetcher } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ContentDashboard = () => {
    //aqui todos los componente customers, users, products, etc
  const [view, setView] = useState('pos')
 
  const view2 = useSelector(store => store.dashboard )

  return (
    <>
      {
        view2 === 'customer' && <CustomerCrud/>
      }
      {
        view2 === 'category' && <CategoryCrud/>
      } 
    </>
  )
}

export default ContentDashboard