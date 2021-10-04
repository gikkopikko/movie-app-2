import React from "react";
import Footer from "./Footer";
import Categories from "./Categories";
import { Link, Route, Switch } from "react-router-dom";
import MovieDesc from "./MovieDescription";
import "../css/movie.css";
import "../css/home.css";

export default function Home() {
  return (
    <div className="body-container">
      <Route path="/home">
        <Categories />
      </Route>
    </div>
  );
}
