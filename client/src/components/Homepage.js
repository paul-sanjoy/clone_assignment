import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Boxline from "./Boxline";
import Main from "./Main";
//import PostsList from "../PostsList";

const Homepage = () => {

    return (
        <div>
            {/* <Navbar /> */}
            <Searchbar />
            <Boxline />
            <Main />
            {/* <PostsList/> */}
        </div>
    );
}


export default Homepage;