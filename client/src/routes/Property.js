import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Property.css";
import "../components/Navbar.css";
import pic from "../images/ppfTabImg.5fdb2015.png";
import p1 from "../images/p1.jpg";


const PostProperty = () => {

    let { id } = useParams();

    const [data, setData] = useState({
        title: "",
        description: "",
        price: "",
        propertyImage: "",
        type: "",
        address: "",
        pinCode: "",
        createdAt: "",
        updatedAt: ""
    });

    const formPropertyInput = (e) => {

        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }


    // Axios POST Request
    const formPropertySubmit = (e) => {
        e.preventDefault();


        axios.post("https://fswi-99acres-clone.herokuapp.com/properties/",
            {
                title: data.title,
                description: data.description,
                price: data.price,
                propertyImage: data.propertyImage,
                type: data.type,
                address: data.address,
                pinCode: data.pinCode,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err))

    }


    const [ppost, setPpost] = useState(null);

    useEffect(() => {
        getAllTypes();
    }, []);

    // Axios GET Request 

    const getAllTypes = () => {
        axios.get('https://fswi-99acres-clone.herokuapp.com/properties/')
            .then((res) => {
                console.log(res.data)
                setPpost(res.data);

            })
            .catch(error => console.error("Error"));

        axios.get(`https://fswi-99acres-clone.herokuapp.com/properties/${id}`)
            .then((res) => {
                console.log(res.data)
                // setPost(res.data);

            })
            .catch(error => console.error("Error"));
    }


    // // Axios UPDATE Request 

    // const propertyUpdate=(id,e)=>{
    //     e.preventDefault();

    //     axios.put(`https://fswi-99acres-clone.herokuapp.com/properties/${id}`,{...data,price:"0000"})
    //     .then((res)=>{
    //         console.log("Property Updated",res)
    //     })
    //     .catch(error=>console.log("Error"))
    // }



    // // Axios DELETE Request 
    
    // const propertyDelete=(iid,e)=>{
    //     e.preventDefault();
    //     // alert(id)
    //     axios.delete(`https://fswi-99acres-clone.herokuapp.coms/properties/${iid}`,{...data})
    //     .then((res)=>{
    //         console.log("Properrty Deleted",res)
    //     })
    //     .catch(error=>console.log("Error"))
    // }

    // Axios Display Request 

    const displayPropertyData = () => {

        return ppost ? (
            ppost.map((ppost) => {
                return (
                    <div className="property-data-container">
                        {/* <div className="property-image" key={ppost.id}>
                        <img src={p1} alt ="img"/>
                        </div> */}
                        <div className="property-posts" key={ppost.id}>
                            <div className="property-detail"><span className="property-detail-titles">Property id: </span><span>{ppost._id}</span></div>
                            <div className="property-detail"><span className="property-detail-titles">Property name: </span><span>{ppost.title}</span></div>
                            <div className="property-detail"><span className="property-detail-titles">Description: </span><span>{ppost.description}</span></div>
                            <div className="property-detail"><span className="property-detail-titles">Price: </span><span>{ppost.price}</span></div>
                            <div className="property-detail"><span className="property-detail-titles">Type: </span><span>{ppost.type}</span></div>
                            <div className="property-detail"><span className="property-detail-titles">Address: </span><span>{ppost.address}</span></div>
                            <div className="property-detail"><span className="property-detail-titles">Pincode: </span><span>{ppost.pinCode}</span></div>
                            <div className="property-detail"><span className="property-detail-titles">CreatedAt: </span><span>{ppost.createdAt}</span></div>
                            <div className="property-detail"><span className="property-detail-titles">updatedAt: </span><span>{ppost.updatedAt}</span></div>
                        </div>
                    </div>
                   
                );
            })
        ) : (
            <div>Loading properties</div>
        );
    }





    return (
        <>
            <div className="property-nav-background Nav-container fixed-top " >
                <div className="Nav-left">
                    <img src="https://static.99acres.com/universalapp/img/nnacres_white.png" alt="img"/>
                </div>
                <div className="Nav-right">
                    <Link className="city-nav-btn" to="/">Home</Link>
                    {/* <Link className="city-nav-btn" to="/">For Buyers</Link>
                    <Link className="city-nav-btn" to="/">For Owners</Link> */}
                    <Link className="city-nav-btn" to="/cities">Post City</Link>
                    <Link className="city-nav-btn" to="/properties">Post Property</Link>
                </div>
            </div>
            <div className="property-container">
                <div className="property-main">
                    <div className="property-main-left">
                    <div className="firstline">
                            <span >REACH UPTO 42 LACS BUYERS</span>
                        </div>
                        <div className="secondline"> 
                            <span >Sell or Rent your </span>
                            <span >Property on 99acres</span>
                        </div>
                        <img src={pic} alt ="img"/>
                    </div>
                    <div className="property-input-container">
                        <form onSubmit={formPropertySubmit}>
                        <div className="container-firstline">
                                <span>Begin Posting your Property</span>
                            </div>
                            <div className="container-secondline">
                                Add Basic Details
                            </div>
                            <div className="property-inputs">
                                <div className="property-input-items">
                                    <span>Title</span>
                                    <input onChange={formPropertyInput} id="title" value={data.title} type="text" autoComplete="off" ></input>
                                </div>
                                <div className="property-input-items">
                                    <span>Description</span>
                                    <input onChange={formPropertyInput} id="description" value={data.description} type="text" autoComplete="off" ></input>
                                </div>
                                <div className="property-input-items">
                                    <span>Price</span>
                                    <input onChange={formPropertyInput} id="price" value={data.price} type="number" autoComplete="off" ></input>
                                </div>
                                <div className="property-input-items">
                                    <span>Type</span>
                                    <input onChange={formPropertyInput} id="type" value={data.type} type="text" autoComplete="off" ></input>
                                </div>
                                <div className="property-input-items">
                                    <span>Address</span>
                                    <input onChange={formPropertyInput} id="address" value={data.address} type="text" autoComplete="off" ></input>
                                </div>
                                <div className="property-input-items">
                                    <span>Pincode</span>
                                    <input onChange={formPropertyInput} id="pinCode" value={data.pinCode} type="number" autoComplete="off" ></input>
                                </div>
                                <div className="property-input-items">
                                    <span>Property Image</span>
                                    <input onChange={formPropertyInput} id="propertyImage" value={data.propertyImage} type="file" autoComplete="off" ></input>
                                </div>

                                <div className="property-input-items">
                                    <button className="property-btn">Begin to Post Your Property</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="property-data">

                    {displayPropertyData()}
                </div>


            </div>
        </>
    )
}

export default PostProperty;