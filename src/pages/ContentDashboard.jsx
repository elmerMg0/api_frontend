import CustomerCrud from '../components/administrator/customer/CustomerCrud'
import CategoryCrud from '../components/administrator/category/CategoryCrud'
import { useSelector } from 'react-redux'
import ProductCrud from '../components/administrator/product/ProductCrud'
import PointOfSale from '../components/administrator/pointOfSale/PointOfSale'
import User from '../components/administrator/user/User'
import Period from '../components/administrator/period/Period'
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
        view === 'pos' && <PointOfSale/>
      }        
      
      {
        view === 'user' && <User/>
      }  
       {
        view === 'period' && <Period/>
      } 
    </>
  )
}

export default ContentDashboard