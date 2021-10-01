import React, { Component } from "react";

import "../css/profile.css";

import MovieBooking from "./MovieBooking";

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      name : "",
      userName : "",
      email : "",
      movieBookings : []
    }
  }


  async componentDidMount(){
    try{
      let data = await fetch("http://localhost:9091/users/Alankrita");
      data = await data.json();
      this.setState({
        name : data.name,
        userName : data.username,
        email :  data.email
      })

      let bookings = await fetch("http://localhost:9091/bookings/"+this.state.userName);
      bookings = await bookings.json();
      this.setState({movieBookings : bookings})
    }
    catch(err){console.log(err)};
  }


  render() {
    return (
      <div>
        <div className="profile-container">
      
          <p>Name: {this.state.name}</p>
          <p>UserName: {this.state.userName}</p>
          <p>Email: {this.state.email}</p>


          {this.state.movieBookings.map((booking) => {return <MovieBooking data={booking}/>})}

        </div>
      </div>
    );
  }
}

export default Profile;