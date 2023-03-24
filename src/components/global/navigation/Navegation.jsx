import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/svg/bussines.svg";
const Navegation = () => {
  return (
    <div className="navigation ">
      {/* <div className="navigation__logo">
        Name Business
      </div> */}
      <div className="navigation__links">
        <ul>
          <li>
            <div className="navigation__content">
              <img src={logo} alt="svgImg" />
              <Link className="navigation__link" to="/">
                Empresa
              </Link>
            </div>
          </li>
          <li className="bg-link">
            <div className="navigation__content">
              <img src={logo} alt="svgImg" />
              <Link className="navigation__link" href="">
                Clientes
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <Link className="navigation__link" href="">
              <img src={logo} alt="svgImg" />
                Usuarios
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <img src={logo} alt="svgImg" />
              <Link className="navigation__link" href="">
                Productos
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <img src={logo} alt="svgImg" />
              <Link className="navigation__link" href="">
                Pedidos App
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <img src={logo} alt="svgImg" />
              <Link className="navigation__link" href="">
                Punto de Venta
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <img src={logo} alt="svgImg" />
              <Link className="navigation__link" href="">
                Reportes
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <img src={logo} alt="svgImg" />
              <Link className="navigation__link" href="">
                Ayuda
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <img src={logo} alt="svgImg" />
              <Link className="navigation__link" href="">
                Acerca de
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navegation;
