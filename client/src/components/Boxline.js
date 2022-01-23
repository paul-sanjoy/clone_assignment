import React from "react";
import d_hp_buy from "../images/d_hp_buy.jpg";
import d_hp_rent from "../images/d_hp_rent.jpg";
import d_hp_ppf from "../images/d_hp_ppf.jpg";
import d_hp_pg from "../images/d_hp_pg.jpg";
import d_hp_com_buy from "../images/d_hp_com_buy.jpg";
import d_hp_com_lease from "../images/d_hp_com_lease.jpg";
import "./Boxline.css";

const Boxline=()=>{
    return(
        <>
        <div className="box">
            <h5>GET STARTED WITH EXPLORING REAL ESTATE OPTIONS</h5>
                <div className="box-content">
                    <div className="img-detail">
                        <div className= "image"><img src={d_hp_buy}></img></div>
                        <div className= "detail">Buying a home</div>
                    </div>
                    <div className="img-detail">
                        <div className= "image"><img src={d_hp_rent}></img></div>
                        <div className= "detail">Renting a home</div>
                    </div>
                    <div className="img-detail">
                        <div className= "image"><img src={d_hp_ppf}></img></div>
                        <div className= "detail">Sell/Rent your property</div>
                    </div>
                    <div className="img-detail">
                        <div className= "image"><img src={d_hp_pg}></img></div>
                        <div className= "detail">PG and co-living</div>
                    </div>
                    <div className="img-detail">
                        <div className= "image"><img src={d_hp_com_buy}></img></div>
                        <div className= "detail">Buying commercial</div>
                    </div>
                    <div className="img-detail">
                        <div className= "image"><img src={d_hp_com_lease}></img></div>
                        <div className= "detail">Lease commercial</div>
                    </div>
                </div>
        </div>
        </>
    );
}
export default Boxline;