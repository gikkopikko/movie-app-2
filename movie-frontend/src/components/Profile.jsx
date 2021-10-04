import React, { Component } from "react";
import {getCurrentUser, getUserBookingDetails } from "../common/api-utils";

import "../css/profile.css";

import MovieBooking from "./MovieBooking";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      userName: "",
      email: "",
      movieBookings: [],
    };
  }

  componentDidMount() {
  getCurrentUser()
  .then((response) => {
    this.setState({
      name: response.name,
      userName: response.username,
      email: response.email,
    });
    const bookingDetailsRequest = {
      username: response.username,
    };
    return getUserBookingDetails(bookingDetailsRequest);
  })
  .then((response) => {
    this.setState({
      movieBookings: response,
    });
    console.log(response);
  })
  .catch((error) => console.log(error));

}

  // async componentDidUpdate() {
  //   try {
  //     let bookings = await fetch(
  //       "http://localhost:9091/bookings/siddharth.garg"
  //     );
  //     bookings = await bookings.json();
  //     this.setState({ movieBookings: bookings });
  //     console.log(bookings);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  render() {
    return (
      <div className="profile-container">
        <div className="profile-inner-container">
          <div className="profile-details">
            <h3>My Profile</h3>
            <p>Name: {this.state.name}</p>
            <p>UserName: {this.state.userName}</p>
            <p>Email: {this.state.email}</p>
          </div>

          <div className="profile-bookings">
            <h3>My Bookings</h3>
            <div className="profile-inner-bookings">
            {this.state.movieBookings.map((booking) => {
              return <MovieBooking data={booking} key={booking.id} />;
            })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
