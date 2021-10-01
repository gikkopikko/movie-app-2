import React, { Component } from "react";
import axios from 'axios';
import  "../css/moviedescription.css";

export default class MovieDesc extends Component {
  state = {
    movie: []
  }

  componentDidMount() {
    axios.get(`http://localhost:9095/movies/horror1`)
      .then(res => {
        const movie = res.data;
        this.setState({ movie });
      })
  }
  render() {
    return (
      <body>
        <div>
            <header classname="header">
                <nav className="navbar">

                    <a className="Links" >Home</a>
                    <a className="Links" >Profile</a>
                </nav>
            </header>
            
            <div className="container">
                <div className="col1">
                    <img src={this.state.movie.posterURL} className="img-demo"/>
                </div>
                <div className="col2">
                    <h1>MOVIE DESCRIPTION</h1>
                    <br/>
                    <p>{this.state.movie.description}</p>
                    <div className="col2-col1">
                        <h3>Movie Name:<span>{this.state.movie.movieName}</span></h3>
                        <h3>Category:<span>{this.state.movie.category}</span></h3>
                        <h3>Actors:<span>{this.state.movie.actors}</span></h3>
                        <h3>Rating:<span>{this.state.movie.rating}</span></h3>
                    </div>
                    <div className="col2-col2">
                        <h3>Director:<span>{this.state.movie.director}</span></h3>
                        <h3>Price:<span>{this.state.movie.price}</span></h3>
                        <h3>Seats Remaining:<span>{60-this.state.movie.totalSeatsOccupied}</span></h3>
                    </div>
                    <div className="col2-col3">
                    <button>Book your ticket now</button>
                    </div>
                </div>
            </div>
        </div>
      </body>
    );
  }
}