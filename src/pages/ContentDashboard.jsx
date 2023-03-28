import CustomerCrud from '../components/administrator/customer/CustomerCrud'
import CategoryCrud from '../components/administrator/category/CategoryCrud'
import { useSelector } from 'react-redux'
import ProductCrud from '../components/administrator/product/ProductCrud'
import User from '../components/administrator/user/User'
const ContentDashboard = () => {
    //aqui todos los componente customers, users, products, etc
 
  const view = useSelector(store => store.dashboard )

  return (
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
      {
        view == 'user' && <User/>
      }  
    </>
  )
}

export default ContentDashboard