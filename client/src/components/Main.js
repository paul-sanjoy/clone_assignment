import React from "react";
import d_hp_buy_xl from "../images/d_hp_buy_xl.jpg";
import "./Main.css";

const Mainbox =()=>{

    return(
        <>
            <div className="boxMain">
                <h5>ALL PROPERTY NEEDS-ONE PORTAL</h5>
                <h1>Find Better Places to Live,Work and Wonder...</h1>
                <div className="boxMain-content">
                    <div className="boxMain-content-left">
                        <img src={d_hp_buy_xl} alt="img"/>
                    </div>
                    <div className="boxMain-content-right">
                        <h5>BUY A HOME</h5>
                        <h2>Find,Buy & Own Your Dream Home</h2>
                        <h3>Explore from Apartments, land, builderfloors, villas and more</h3>
                        <button className="btnMain">Explore Buying</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Mainbox;