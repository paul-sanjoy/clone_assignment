import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./City.css";
import "../components/Navbar.css";
import pic from "../images/ppfTabImg.5fdb2015.png";


const PostCity = () => {

    let {id}=useParams();

    const [data, setData] = useState({
        name: "",
        createdAt: "",
        updatedAt: ""
    });
    

    const formCityInput = (e) => {

        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    // Axios POST Request 

    const formCitySubmit = (e) => {
        e.preventDefault();

          
        axios.post("https://fswi-99acres-clone.herokuapp.com/cities/",
            {
                name: data.name,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err))

        

    }

    // Axios  GET Request 

    const [post, setPost] = useState(null);

    useEffect(() => {
        getAllTypes();
    }, []);
    const getAllTypes = () => {
        axios.get('https://fswi-99acres-clone.herokuapp.com/cities')
            .then((res) => {
                console.log(res.data)
                setPost(res.data);

            })
            .catch(error => console.error("Error"));

            // axios.get(`https://fswi-99acres-clone.herokuapp.com/cities/${id}`)
            // .then((res) => {
            //     console.log(res.data)

            // })
            // .catch(error => console.error("Error"));
            

    }

    // // Axios DELETE Request 
    
    // const cityDelete=(id,e)=>{
    //     e.preventDefault();
    //     axios.delete(`https://fswi-99acres-clone.herokuapp.coms/cities/${id}`,{name:""})
    //     .then((res)=>{
    //         console.log("City Deleted",res)
    //     })
    //     .catch(error=>console.log("Error",error))
    // }

    // Axios UPDATE Request 

    const cityUpdate=(id,e)=>{
        e.preventDefault();

        axios.put(`https://fswi-99acres-clone.herokuapp.com/cities/${id}`,{...data,name:"SanjoyCity"})
        .then((res)=>{
            console.log("City Updated",res)
        })
        .catch(error=>console.log("Error"))
    }

    // DISPLAY Request 

    const displayCityData = () => {

        return post ? (
            post.map((post) => {
                return (
                    <div className="city-posts" key={post.id}>
                        <div className="city-detail"><span>City id: </span><span>{post._id}</span></div>
                        <div className="city-detail"><span>City name: </span><span>{post.name}</span></div>
                        <div className="city-detail"><span>Created at: </span><span>{post.createdAt}</span></div>
                        <div className="city-detail"><span>Updated at: </span><span>{post.updatedAt}</span></div>
                        <button onClick={(e)=>cityUpdate(post._id,e)}>Update</button>

                    </div>
                );
            })
        ) : (
            <div>Loading cities</div>
        );
    }





    return (
        <>

            <div className="city-nav-background Nav-container fixed-top " >
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
            <div className="city-container">
                <div className="city-main">
                    <div className="city-main-left">
                        <div className="firstline">
                            <span >REACH UPTO 42 LACS BUYERS</span>
                        </div>
                        <div className="secondline"> 
                            <span >Sell or Rent in your </span>
                            <span >City on 99acres</span>
                        </div>
                        <img src={pic} alt="img"/>
                    </div>
                    <div className="city-input-container">
                        <form onSubmit={formCitySubmit}>
                            <div className="container-firstline">
                                <span>Begin Posting your City</span>
                            </div>
                            <div className="container-secondline">
                                Add Basic Details
                            </div>
                            <div className="city-inputs">
                                <div className="city-input-items">
                                    <span>Name</span>
                                    <input onChange={formCityInput} id="name" value={data.name} type="text" autoComplete="off" ></input>
                                </div>
                                <div className="city-input-items">
                                    <span>Created At</span>
                                    <input onChange={formCityInput} id="createdAt" value={data.createdAt} type="date" autoComplete="off" ></input>
                                </div>
                                <div className="city-input-items">
                                    <span>Updated At</span>
                                    <input onChange={formCityInput} id="updatedAt" value={data.updatedAt} type="date" autoComplete="off" ></input>
                                </div>
                                
                                <div className="city-input-items">
                                    <button className="city-btn">Begin to Post Your City</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="city-data">

                    {displayCityData()}
                </div>


            </div>
        </>
    )
}

export default PostCity;