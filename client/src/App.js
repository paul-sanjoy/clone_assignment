import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './redux/posts/actions/fetchAction';
//import PostsList from './PostsList';

import './App.css';
import Home from "./components/Homepage";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchPosts())
  },[])
  return (
    <div className="App ">
      <Home />
      {/* <PostsList/> */}
    </div>
  );
}

export default App;