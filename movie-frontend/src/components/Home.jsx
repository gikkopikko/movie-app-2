import React from "react";
import Footer from "./Footer";
import Categories from "./Categories";
import { Link, Route, Switch } from "react-router-dom";
import MovieDesc from "./MovieDescription";


export default function Home() {
    
    return (
        <div>
       
        <Route path="/home"><Categories/></Route>
            {/* <Route path="/profile"></Route>
            <Route path="/login"></Route>
             <Route path="/movie/:id"></Route> */}
           
        </div>
  );
}
