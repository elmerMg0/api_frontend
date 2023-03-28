import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../assets/svg/bussines.svg";
import users from "../../../assets/svg/users.svg"
const Navegation = () => {
  return (
    <div className="navigation ">
      {/* <div className="navigation__logo">
        Name Business
      </div> */}
      <div className="navigation__links">
        <nav>
        <ul>
          <li>
            <img src={logo} alt="svgImg" />
            <Link className="navigation__link" to="/">
              Empresa
            </Link>
          </li>
          <li>
            <img src={logo} alt="svgImg" />
            <Link className="navigation__link" to="/customer">
              Clientes
            </Link>
          </li>
          <li>
            <img src={users} alt="svgImg" />
            <Link className="navigation__link" to="/user">
              Usuarios
            </Link>
          </li>
          <li>
            <img src={logo} alt="svgImg" />
            <Link className="navigation__link" href="">
              Productos
            </Link>
          </li>
          <li>
            <img src={logo} alt="svgImg" />
            <Link className="navigation__link" href="">
              Pedidos App
            </Link>
          </li>
          <li>
            <img src={logo} alt="svgImg" />
            <Link className="navigation__link" href="">
              Punto de Venta
            </Link>
          </li>
          <li>
            <img src={logo} alt="svgImg" />
            <Link className="navigation__link" href="">
              Reportes
            </Link>
          </li>
          <li>
            <img src={logo} alt="svgImg" />
            <Link className="navigation__link" href="">
              Ayuda
            </Link>
          </li>
          <li>
            <img src={logo} alt="svgImg" />
            <Link className="navigation__link" href="">
              Acerca de
            </Link>
          </li>
        </ul>
        </nav>
        
        <Outlet/>
      </div>
    </div>
  );
};

export default Navegation;
