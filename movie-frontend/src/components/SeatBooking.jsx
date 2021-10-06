import React, { Component } from "react";
import "../css/seatbooking.css";
import {
  getBookingDetails,
  getMovieDetails,
  createBooking,
  getCurrentUser,
} from "../common/api-utils";

const rows = [0, 1, 2, 3, 4, 5];
const cols = [1, 2, 3, 4, 5, 6, 7, 8];
export default class SeatBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      movieId: this.props.match.params.movieId,
      moviePrice: "0",
      selected: [],
      occupied: [],
      alreadyBooked: [],
      username: "",
    };
    console.log(this.props);
  }

  componentDidMount() {
    this.setState({
      moviePrice: 0,
      selected: [],
    });
    getCurrentUser()
      .then((response) => {
        this.setState({
          username: response.username,
        });
        const bookingDetailsRequest = {
          username: response.username,
          movieId: this.state.movieId,
        };
        return getBookingDetails(bookingDetailsRequest);
      })
      .then((response) => {
        this.setState({
          alreadyBooked: response.seatsBooked,
        });
        console.log(response);
      })
      .catch((error) => console.log(error));
    getMovieDetails(this.state.movieId).then((response) => {
      this.setState({
        occupied: response.occupiedSeats,
        movieName: response.movieName,
        moviePrice: response.price,
      });
      console.log(response);
    });
  }

  seatClick = (i, e) => {
    const seatno = i;
    if (this.state.selected.includes(seatno)) {
      const index = this.state.selected.indexOf(seatno);
      const selected2 = [...this.state.selected];
      selected2.splice(index, 1);
      this.setState({
        selected: selected2,
      });
    } else {
      const selected2 = [...this.state.selected];
      selected2.push(seatno);
      this.setState({
        selected: selected2,
      });
    }
  };

  seatClass = (seatNo) => {
    let isOccupied = this.state.occupied.includes(seatNo);
    let isAlreadyBooked = this.state.alreadyBooked.includes(seatNo);
    let isSelected = this.state.selected.includes(seatNo);
    if (isAlreadyBooked) return "already-booked";
    else if (isOccupied) return "occupied";
    else if (isSelected) return "selected";
  };

  handleBooking = (e) => {
    if (this.state.selected.length === 0) return alert("Please select a seat");
    const bookingRequest = {
      username: this.state.username,
      movieId: this.state.movieId,
      movieName: this.state.movieName,
      selected: this.state.selected,
    };
    createBooking(bookingRequest)
      .then((response) => {
        alert(response.message);
        console.log(response);
        setTimeout(() => {
          this.props.history.push("/profile");
        }, 1000);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };
  render() {
    return (
      <div className="seats-booking-body">
        <div className="movie-container">
          <div className="movie-name-text">
            {this.state.movieName + "    ($" + this.state.moviePrice + ")"}
          </div>
        </div>

        <ul className="showcase">
          <li>
            <div className="seat"></div>
            <small>N/A</small>
          </li>
          <li>
            <div className="seat selected"></div>
            <small>Selected</small>
          </li>
          <li>
            <div className="seat occupied"></div>
            <small>Occupied</small>
          </li>
          <li>
            <div className="seat already-booked"></div>
            <small>Booked</small>
          </li>
        </ul>

        <div className="seats-container">
          <div className="screen"></div>
          {rows.map((row) => {
            return (
              <div className="seat-row" key={"row-" + row}>
                {cols.map((col) => {
                  return (
                    <div
                      className={"seat " + this.seatClass(8 * row + col)}
                      onClick={(e) => this.seatClick(8 * row + col, e)}
                      key={"seat-" + 8 * row + col}
                    >
                      {8 * row + col}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <p className="seat-bookng-text">
          You have selected <span id="count">{this.state.selected.length}</span>{" "}
          seats for a price of $
          <span id="total">
            {this.state.selected.length * Number(this.state.moviePrice)}
          </span>
        </p>
        <button className="seat-booking-btn" onClick={this.handleBooking}>
          BOOK
        </button>
      </div>
    );
  }
}
