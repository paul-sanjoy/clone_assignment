import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Boxline from "./Boxline";
import Main from "./Main";
//import PostsList from "../PostsList";

const Home = () => {

    return (
        <div>
            <Navbar />
            <Searchbar />
            <Boxline />
            <Main />
            {/* <PostsList/> */}
        </div>
    );
}


export default Home;