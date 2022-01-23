import React from "react";
import "./Navbar.css";


const Navbar =()=>{
    return(
        <>
            <div className="Nav-container fixed-top " >
                <div className="Nav-left">
                    <img src="https://static.99acres.com/universalapp/img/nnacres_white.png" alt="img"/>
                </div>
                <div className="Nav-right">
                    <a className="nav-btn" href="/">Home</a>
                    <a className="nav-btn"href="/">For Buyers</a>
                    <a className="nav-btn" href="/">For Owners</a>
                    <a className="nav-btn" href="/">Post City</a>
                    <a className="nav-btn" href="/">Post Property</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;