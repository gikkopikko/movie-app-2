import React, { Component } from "react";
import "../css/seatbooking.css";

const rows = [0, 1, 2, 3, 4, 5];
const cols = [1, 2, 3, 4, 5, 6, 7, 8];
export default class SeatBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      movieId: "",
      moviePrice: 0,
      selected: [],
      occupied: [],
      alreadyBooked: [],
    };
  }
  componentDidMount() {
    this.setState({
      movieName: "sapidjp",
      movieId: "dsadasd",
      moviePrice: 0,
      selected: [5],
      occupied: [1, 2, 3, 4, 10, 15, 17, 19],
      alreadyBooked: [1, 2, 3, 4],
    });
    console.log(this.props.match.params.movieId);
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

  handleBooking = (e) => {};
  render() {
    return (
      <div className="seats-booking-body">
        <div className="movie-container">
          {/* <label>Pick a movie:</label> */}
          <select id="movie">
            <option value="12">Joker ($12)</option>
          </select>
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
              <div className="row" key={"row-" + row}>
                {cols.map((col) => {
                  return (
                    <div
                      className={"seat " + this.seatClass(8 * row + col)}
                      onClick={(e) => this.seatClick(8 * row + col, e)}
                      // seatno={8 * row+col}
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

        <p className="text">
          You have selected <span id="count">{this.state.selected.length}</span>{" "}
          seats for a price of $<span id="total">0</span>
        </p>
        <button onClick={this.handleBooking}>BOOK</button>
      </div>
    );
  }
}
