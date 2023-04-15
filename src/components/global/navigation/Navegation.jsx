import React, { useState } from "react";
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
import arrowLeft from "../../../assets/svg/arrowLeft.svg";
import arrowRigth from "../../../assets/svg/arrowRigth.svg";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createView } from "../../../redux/states/dashboard";
const Navegation = () => {

  const dispatch = useDispatch();
  const view = useSelector(store => store.dashboard)
  const [navigationWidth, setNavigationWidth] = useState(220)
  const [navigationLeft, setNavigationLeft] = useState(false)
  const handleOnClick = ( view ) => {
    window.localStorage.setItem('view',view);
    dispatch(createView(view))
  }

  const handleNavigationWidth = () => {
    if(navigationWidth === 85){
      setNavigationWidth(300)
      setNavigationLeft(false);
    }else{
      setNavigationLeft(true);
      setNavigationWidth(85);
    }
  }

  return (
    <div className="navigation" style={{width:`${navigationWidth}px`, transition: '1s ease all' }}>
      {/* <div className="navigation__logo">
        Name Business
      </div> */}
      <div className="navigation__links">
        <ul>
          <li className={ view === 'bussines' ? 'bg-link':'' }>
            <div onClick={() => handleOnClick('bussines')} className="navigation__content">
              <img src={bussines} alt="svgImg" />
              <button /* style={{display: hiddenText ? 'none': '', transition: '1s'}} */  className="navigation__link" to="/">
                Empresa
              </button>
            </div>
          </li>
          <li className={ view === 'customer' ? 'bg-link':'' }>
            <div onClick={() => handleOnClick('customer')} className="navigation__content">
              <img src={customer} alt="svgImg" />
              <button /* style={{display: hiddenText ? 'none': '', transition: '1s'}} */  className="navigation__link" href="">
                Clientes
              </button>
            </div>
          </li>
          <li onClick={() => handleOnClick('user')} className={ view === 'user' ? 'bg-link':'' }>
            <div className="navigation__content">
              <img src={user} alt="svgImg" />
              <button /* style={{display: hiddenText ? 'none': '', transition: '1s'}} */  className="navigation__link" href="">
                Usuarios
              </button>
            </div>
          </li>
          <li className={ view === 'product' ? 'bg-link':'' }>
            <div onClick={() => handleOnClick('product')} className="navigation__content">
              <img src={product} alt="svgImg" />
              <button /* style={{display: hiddenText ? 'none': '', transition: '1s'}} */  className="navigation__link" href="">
                Productos
              </button>
            </div>
          </li>
          <li className={ view === 'category' ? 'bg-link':'' }>
            <div onClick={() => handleOnClick('category')} className="navigation__content">
              <img src={bussines} alt="svgImg" />
              <button /* style={{display: hiddenText ? 'none': '', transition: '1s'}} */  className="navigation__link" href="">
                Categorias
              </button>
            </div>
          </li>
          <li className={ view === 'orderApp' ? 'bg-link':'' }>
            <div onClick={() => handleOnClick('orderApp')} className="navigation__content">
              <img src={trolley} alt="svgImg" />
              <button /* style={{display: hiddenText ? 'none': '', transition: '1s'}} */  className="navigation__link" href="">
                App
              </button>
            </div>
          </li>
          <li className={ view === 'pos' ? 'bg-link':'' }>
            <div onClick={() => handleOnClick('pos')} className="navigation__content">
              <img src={pos} alt="svgImg" />
              <button /* style={{display: hiddenText ? 'none': '', transition: '1s'}} */  className="navigation__link" href="">
                Pos
              </button>
            </div>
          </li>
          <li className={ view === 'report' ? 'bg-link':'' }>
            <div onClick={() => handleOnClick('report')} className="navigation__content">
              <img src={report} alt="svgImg" />
              <button /* style={{display: hiddenText ? 'none': '', transition: '1s'}} */  className="navigation__link" href="">
                Reportes
              </button>
            </div>
          </li>
          <li className={ view === 'help' ? 'bg-link':'' }>
            <div onClick={() => handleOnClick('help')} className="navigation__content">
              <img src={help} alt="svgImg" />
              <button /* style={{display: hiddenText ? 'none': '', transition: '1s'}} */  className="navigation__link" href="">
                Ayuda
              </button>
            </div>
          </li>
          <li className={ view === 'about' ? 'bg-link':'' }>
            <div onClick={() => handleOnClick('about')} className="navigation__content">
              <img src={infoCircle} alt="svgImg" />
              <button /* style={{display: hiddenText ? 'none': '', transition: '1s'}} */  className="navigation__link" href="">
                About
              </button>
            </div>
          </li>
          <button className="btn-maxmin" onClick={() => handleNavigationWidth()} >
            {
              navigationLeft ? 
              <img src={arrowRigth} alt="" />
              :
              <img src={arrowLeft} alt="" />
            }
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navegation;
