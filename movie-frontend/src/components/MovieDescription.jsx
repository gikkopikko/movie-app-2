import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import axios from "axios";
import "../css/main.css";
import "../css/moviedescription.css";


import {getMovieDetails } from "../common/api-utils";

export default class MovieDesc extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    movie: {},
  };

  // componentDidMount() {
  //   console.log(this.props);

  //   axios
  //     .get(`http://localhost:9095/movies/` + this.props.match.params.id)
  //     .then((res) => {
  //       this.setState({ movie: res.data });
  //     });
  // }

  componentDidMount(){
    getMovieDetails(this.props.match.params.id).then((response) => {
      this.setState({
        movie: response,
      });
      console.log(response);
    });
  }

  handleBookNow = (e) => {
    this.props.history.push("/seatbooking/" + this.props.match.params.id);
  };
  render() {
    return (
        <div className="movie-desc-body">
          <div className="movie-desc-col1">
            <img
              src={this.state.movie.posterURL}
              className="movie-desc-img-demo"
            />
          </div>
          <div className="movie-desc-col2">
            <h1 className="movie-desc-heading1">MOVIE DESCRIPTION</h1>
            <br />
            <p>{this.state.movie.description}</p>
            <div className="movie-desc-col2-col1">
              <h3 className="movie-desc-heading3">
                Movie Name :{' '}
                <span className="movie-desc-heading3-span">
                  {this.state.movie.movieName}
                </span>
              </h3>
              <h3 className="movie-desc-heading3">
                Category :{' '}
                <span className="movie-desc-heading3-span">
                  {this.state.movie.category}
                </span>
              </h3>
              <h3 className="movie-desc-heading3">
                Actors :{' '}
                <span className="movie-desc-heading3-span">
                  {this.state.movie.actors}
                </span>
              </h3>
              <h3 className="movie-desc-heading3">
                Rating :{' '}
                <span className="movie-desc-heading3-span">
                  {this.state.movie.rating}
                </span>
              </h3>
            </div>
            <div className="movie-desc-col2-col2">
              <h3 className="movie-desc-heading3">
                Director :{' '}
                <span className="movie-desc-heading3-span">
                  {this.state.movie.director}
                </span>
              </h3>
              <h3 className="movie-desc-heading3">
                Price :{' '}
                <span className="movie-desc-heading3-span">
                  {this.state.movie.price}
                </span>
              </h3>
              <h3 className="movie-desc-heading3">
                Seats Remaining :{' '}
                <span className="movie-desc-heading3-span">
                  {60 - this.state.movie.totalSeatsOccupied}
                </span>
              </h3>

              <h3 className="movie-desc-heading3">
                Pick Your Date:
                <span className="movie-desc-heading3-span">

         
          <div className="movie-desc-col2-col3">
          
            <Input
              type="date"
             id="date"
              name="date"
              
              
            />
          </div>
  </span>
              </h3>
              
            </div>
            <div className="movie-desc-col2-col3">
            
            
              <button
                className="movie-desc-button"
                onClick={this.handleBookNow}
              >
                Book your ticket now
              </button>
            </div>

            
          </div>

          

           
            
            </div>
            
    );
  }
}