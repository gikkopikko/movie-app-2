import React from "react";
import "../css/profile.css";

export default class MovieBooking extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteBooking = (id, e) => {
    fetch("http://localhost:9091/booking/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  };

  render() {
    // console.log(this.props.data);
    return (
      <div className="profile-booking">
        <p>Booking Id: {this.props.data.id}</p>
        <p>Movie: {this.props.data.movieName}</p>
        <p>Seats Booked: {this.props.data.seatsBooked.join(", ")}</p>
        <p>Number of Seats Booked: {this.props.data.seatsBooked.length}</p>
        <p>Amount Paid: {this.props.data.amountPaid}</p>
        <button
          className="profile-button"
          onClick={(e) => this.deleteBooking(this.props.data.id, e)}
        >
          Cancel
        </button>
      </div>
    );
  }
}
