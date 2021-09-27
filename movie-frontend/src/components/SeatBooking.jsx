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
      selected: [5],
      occupied: [1, 2, 3, 4, 10, 15, 17, 19],
      alreadyBooked: [1, 2, 3, 4],
    };
    this.seatClick = this.seatClick.bind(this);
  }

  seatClick = (i, e) => {
    // const seatno = parseInt(e.target.dataset.getAttribute("seatno"));
    const seatno = i;
    console.log(seatno);
    if (this.state.selected.includes(seatno)) {
      const index = this.state.selected.indexOf(seatno);
      const selected2 = [...this.state.selected];
      selected2.splice(index, 1);
      this.setState({
        selected: selected2,
      });
      //   e.className = "seat";
    } else {
      const selected2 = [...this.state.selected];
      selected2.push(seatno);
      this.setState({
        selected: selected2,
      });
      //   e.className = "seat  selected";
    }
  };

  seatClass = (seatNo) => {
    // return this.state.selected.includes(seatNo)
    //   ? "selected "
    //   : this.occupied.includes(seatNo)
    //   ? "occupied"
    //   : "";
    console.log(seatNo);
    let isOccupied = this.state.occupied.includes(seatNo);
    let isAlreadyBooked = this.state.alreadyBooked.includes(seatNo);
    let isSelected = this.state.selected.includes(seatNo);
    if (isAlreadyBooked) return "already-booked";
    else if (isOccupied) return "occupied";
    else if (isSelected) return "selected";
  };
  render() {
    return (
      <body>
        <div>
          <div className="movie-container">
            {/* <label>Pick a movie:</label> */}
            <select id="movie">
              <option value="12">Joker ($12)</option>
              <option value="10">Avengers: Endgame ($10)</option>
              <option value="8">Toy Story 4 ($8)</option>
              <option value="9">The Lion King ($9)</option>
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

          <div className="container">
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
            You have selected{" "}
            <span id="count">{this.state.selected.length}</span> seats for a
            price of $<span id="total">0</span>
          </p>
        </div>
      </body>
    );
  }
}

/*  
                 <div className="seat">{2 * row}</div>
                  <div className="seat">{3 * row}</div>
                  <div className="seat">{4 * row}</div>
                  <div className="seat occupied">{5 * row}</div>
                  <div className="seat occupied">{6 * row}</div>
                  <div className="seat occupied">{7 * row}</div>
                  <div className="seat">{8 * row}</div>  */
