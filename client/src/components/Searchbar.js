import React from "react";
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "@popperjs/core";
import mainImg from "../images/banner.png";
import "./Searchbar.css";

const Searchbar = () => {

    return (
        <>
            <div className="boxBanner">
                <img src={mainImg} alt="main-image" />
            </div>
            <div className="header_card">
               <div className="headercard1">
                    <div><span>Buy</span></div>
                    <div><span>Rent</span></div>
                    <div><span>PG</span></div>
                    <div><span>Commercial</span></div>
                    <div><span>Coworking</span></div>
                    <div><span>Projects</span></div>
                    <div><span>Dealer</span></div>
               </div>
               <hr></hr>
               <div className="main_search">
               <div className="dropdown">
                 <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                   All Residentials</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                         <div className="mb-3 form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                              <label className="dropdown-label" for="flexCheckDefault">
                              Residential Apartment</label>
                        </div>
                        <div className="mb-3 form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                              <label className="dropdown-label" for="flexCheckDefault">
                              Builder Floor</label>
                        </div>
                        <div className="mb-3 form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                              <label className="dropdown-label" for="flexCheckDefault">
                              Residential Land</label>
                        </div>
                        <div className="mb-3 form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                              <label className="dropdown-label" for="flexCheckDefault">
                              Other</label>
                        </div>                       
                    </div>
               </div>
              
               <div className="container-fluid2">
               
                <form className="d-flex">
                <input className="form-control" type="search" placeholder="Search city, locality, project/society, landmarks..." aria-label="Search"/>
                <span>Near Me</span>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
               </div>
          </div>
        </>
    );
}
export default Searchbar;