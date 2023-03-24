import React from "react";
import { Link } from "react-router-dom";
import bussines from "../../../assets/svg/bussines.svg";
import customer from "../../../assets/svg/customer.svg";
import user from "../../../assets/svg/user.svg";
import product from "../../../assets/svg/product.svg";
import trolley from "../../../assets/svg/trolley.svg";
import pos from "../../../assets/svg/pos.svg";
import report from "../../../assets/svg/report.svg";
import help from "../../../assets/svg/help.svg";
import infoCircle from "../../../assets/svg/infoCircle.svg";
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
              <img src={bussines} alt="svgImg" />
              <Link className="navigation__link" to="/">
                Empresa
              </Link>
            </div>
          </li>
          <li className="bg-link">
            <div className="navigation__content">
              <img src={customer} alt="svgImg" />
              <Link className="navigation__link" href="">
                Clientes
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <Link className="navigation__link" href="">
              <img src={user} alt="svgImg" />
                Usuarios
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <img src={product} alt="svgImg" />
              <Link className="navigation__link" href="">
                Productos
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <img src={bussines} alt="svgImg" />
              <Link className="navigation__link" href="">
                Categorias
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <img src={trolley} alt="svgImg" />
              <Link className="navigation__link" href="">
                Pedidos App
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <img src={pos} alt="svgImg" />
              <Link className="navigation__link" href="">
                Punto de Venta
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <img src={report} alt="svgImg" />
              <Link className="navigation__link" href="">
                Reportes
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <img src={help} alt="svgImg" />
              <Link className="navigation__link" href="">
                Ayuda
              </Link>
            </div>
          </li>
          <li>
            <div className="navigation__content">
              <img src={bussines} alt="svgImg" />
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
