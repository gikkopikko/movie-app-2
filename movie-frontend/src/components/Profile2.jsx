import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "../css/profile2.css";

class Profile2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {},
      bookings: [],
    };
  }
  componentDidMount() {
    this.setState({
      profileData: {
        name: "Siddharth Garg",
        username: "siddharth.garg",
        email: "siddharh.garg@gmail.com",
      },
      bookings: [
        {
          bookingId: "12321321",
          movie: "movie name",
          seatsBooked: "1,2,3,4,5",
          noOfSeats: "5",
          amountPaid: "50",
        },
        {
          bookingId: "12321321",
          movie: "movie name",
          seatsBooked: "1,2,3,4,5",
          noOfSeats: "5",
          amountPaid: "50",
        },
      ],
    });
  }
  render() {
    return (
      <div>
        <div className="profile-container">
          <p>Name: {this.state.profileData.name}</p>
          <p>Username: {this.state.profileData.username}</p>
          <p>Email: {this.state.profileData.email}</p>
          {this.state.bookings.map((booking) => {
            return (
              <div className="profile-inner-container">
                <p>
                  <span>Booking Id: </span>
                  <span>{booking.bookingId}</span>
                </p>
                <p>
                  <span>Movie:</span> <span>{booking.movie}</span>
                </p>
                <p>
                  <span>Seats</span> <span>{booking.seatsBooked}</span>
                </p>
                <p>
                  <span>Number of Seats Booked:</span>{" "}
                  <span>{booking.noOfSeats}</span>
                </p>
                <p>
                  <span>Amount Paid:</span> <span>{booking.amountPaid}</span>
                </p>
                <button className="profile-button">Cancel</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Profile2;
