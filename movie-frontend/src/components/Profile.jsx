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

  async componentDidMount() {
    console.log(this.props);
  
    console.log(this.props.currentUser.name);
    console.log(this.props.currentUser.email);
    console.log(this.props.currentUser.username);
    console.log(this.props.currentUser.password);
   
    try {
      let data = await fetch("http://localhost:9091/users/"+this.props.currentUser.name);
      data = await data.json();
      // let data = this.props.currentUser;
      this.setState({
        name: this.props.currentUser.username,
        userName: this.props.currentUser.username,
        email: this.props.currentUser.name,
      });

      let bookings = await fetch(
        "http://localhost:9091/bookings/siddharth.garg"
      );
      bookings = await bookings.json();
      this.setState({ movieBookings: bookings });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <div className="profile-container">
          <p>Name: {this.state.name}</p>
          <p>UserName: {this.state.userName}</p>
          <p>Email: {this.state.email}</p>

          {this.state.movieBookings.map((booking) => {
            return <MovieBooking data={booking} />;
          })}
        </div>
      </div>
    );
  }
}

export default Profile;
