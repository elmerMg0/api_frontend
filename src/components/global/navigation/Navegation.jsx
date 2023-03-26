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
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createView } from "../../../redux/states/dashboard";
const Navegation = () => {

  const dispatch = useDispatch();
  const view = useSelector(store => store.dashboard)
  const handleOnClick = ( view ) => {
    window.localStorage.setItem('view',view);
    dispatch(createView(view))
  }
  return (
    <div className="navigation ">
      {/* <div className="navigation__logo">
        Name Business
      </div> */}
      <div className="navigation__links">
        <ul>
          <li className={ view === 'bussines' ? 'bg-link':'' }>
            <div className="navigation__content">
              <img src={bussines} alt="svgImg" />
              <button onClick={() => handleOnClick('bussines')} className="navigation__link" to="/">
                Empresa
              </button>
            </div>
          </li>
          <li className={ view === 'customer' ? 'bg-link':'' }>
            <div className="navigation__content">
              <img src={customer} alt="svgImg" />
              <button onClick={() => handleOnClick('customer')} className="navigation__link" href="">
                Clientes
              </button>
            </div>
          </li>
          <li className={ view === 'user' ? 'bg-link':'' }>
            <div className="navigation__content">
              <button onClick={() => handleOnClick('user')} className="navigation__link" href="">
              <img src={user} alt="svgImg" />
                Usuarios
              </button>
            </div>
          </li>
          <li className={ view === 'product' ? 'bg-link':'' }>
            <div className="navigation__content">
              <img src={product} alt="svgImg" />
              <button onClick={() => handleOnClick('product')} className="navigation__link" href="">
                Productos
              </button>
            </div>
          </li>
          <li className={ view === 'category' ? 'bg-link':'' }>
            <div className="navigation__content">
              <img src={bussines} alt="svgImg" />
              <button onClick={() => handleOnClick('category')} className="navigation__link" href="">
                Categorias
              </button>
            </div>
          </li>
          <li className={ view === 'orderApp' ? 'bg-link':'' }>
            <div className="navigation__content">
              <img src={trolley} alt="svgImg" />
              <button onClick={() => handleOnClick('orderApp')} className="navigation__link" href="">
                Pedidos App
              </button>
            </div>
          </li>
          <li className={ view === 'pos' ? 'bg-link':'' }>
            <div className="navigation__content">
              <img src={pos} alt="svgImg" />
              <button onClick={() => handleOnClick('pos')} className="navigation__link" href="">
                Punto de Venta
              </button>
            </div>
          </li>
          <li className={ view === 'report' ? 'bg-link':'' }>
            <div className="navigation__content">
              <img src={report} alt="svgImg" />
              <button onClick={() => handleOnClick('report')} className="navigation__link" href="">
                Reportes
              </button>
            </div>
          </li>
          <li className={ view === 'help' ? 'bg-link':'' }>
            <div className="navigation__content">
              <img src={help} alt="svgImg" />
              <button onClick={() => handleOnClick('help')} className="navigation__link" href="">
                Ayuda
              </button>
            </div>
          </li>
          <li className={ view === 'about' ? 'bg-link':'' }>
            <div className="navigation__content">
              <img src={infoCircle} alt="svgImg" />
              <button onClick={() => handleOnClick('about')} className="navigation__link" href="">
                Acerca de
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navegation;
