import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthGuard from './guards/AuthGuard';
import { PrivateRoutes, PublicRoutes } from './models/routes';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import RoutesWithNotFount from './utilities/RoutesWithNotFount';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesWithNotFount>
          <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD}/>}/>
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard/>}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>} ></Route>
          </Route> 
        </RoutesWithNotFount>
      {/*   <AppRouter/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
