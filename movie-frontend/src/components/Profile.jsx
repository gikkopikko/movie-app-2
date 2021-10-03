import React, { Component } from "react";

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

  async componentDidMount(){
    try {

      
      let data = await fetch("http://localhost:9091/users/"+this.props.currentUser.name);
      data = await data.json();
      // this.setState({ currentUser: this.props.currentUser });
      this.setState({
        name: this.props.currentUser.username,
        userName: this.props.currentUser.username,
        email: this.props.currentUser.name,
      });
    }
    catch(err){
      console.log(err);
    }
  }

  async componentDidUpdate() {
    try {
      let bookings = await fetch(
        "http://localhost:9092/customer_service/current"
      );
      bookings = await bookings.json();
      this.setState({ movieBookings: bookings });
      console.log(bookings);
    } catch (err) {
      console.log(err);
    }
  }

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
            <h3>My bookings</h3>
            {this.state.movieBookings.map((booking) => {
              return <MovieBooking data={booking} key={booking.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
