import React from 'react';
import Footer from "./Footer";
import Categories from "./Categories";
import { Link, Route, Switch } from "react-router-dom";
import MovieDesc from './MovieDescription';

export default function Home() {
    return (
        <div>
            <header>
            <div class="left">
                <h2>Movie App</h2>
            </div>
            <div class="right">
                <div class="holder">
                <div class="item">
                    <Link to="/home">Home</Link>
                    {/* <a href="#">Home</a> */}
                </div>
                <div class="item">
                    <Link to="/profile">Your Profile</Link>
                    {/* <a href="#">Your Profile</a> */}
                </div>
                <div class="item">
                    <Link to="/login"><button>Sign Out</button></Link>
                </div>
                </div>
            </div>
        </header>
            <Route path="/home"><Categories/></Route>
            <Route path="/profile"></Route>
            <Route path="/login"></Route>
            <Footer/>
        </div>
    )
}
