import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Navigation.css'
import x from '../../images/home.png' 
import y from '../../images/shopping-cart.png'
import z from '../../images/online-shopping.png'

import {useForm} from 'react-hook-form'


function Navigation() {

 

  let {register,handleSubmit}=useForm();

  function onSearch(data){
   

   
  
  
  }




  return (

    <div className="main">
      <div className="navi">
      <div className="navbar navbar-expand-sm p-3"  >
        <div className="container-fluid">
          <a className="navbar-brand">Mini Project</a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="menu"
          >

              <form class="d-flex w-50 me-5" role="search" onSubmit={handleSubmit(onSearch)} >

              
                 <input class="form-control me-2" type="search" placeholder="Search" {...register("searchData")} />
                 <button class="btn btn-success" type="submit"><i className="fa-solid fa-magnifying-glass p-1"></i></button>
             </form>



            <ul className="navbar-nav">

            


              <li className="nav-item">
                <Link to="" className="nav-link">
                  <img src={x} className="icon"></img>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="shop" className="nav-link">
                <img src={z} className="icon"></img>
                </Link>
              </li>


              
             
              <li className="nav-item">
                <Link to="cart" className="nav-link">
                <img src={y} className="icon"></img>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navigation;