import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "../css/profile.css";

class Profile extends Component {

    state={
        userData:[],
        columns : [
            { dataField: 'sid', text: 'Id', sort: true },
            { dataField: 'fname', text: 'First Name', sort: true },
            { dataField: 'address', text: 'Address', sort: true }
          ],
    };
  render() {
    return (
      <div>
        <div className="profile-container">
          <p>Name: Alankrita Patel</p>
          <p>UserName: Alankrita.Patel</p>
          <p>Email: Alankrita.Patel@brillio.com</p>

          <div className="profile-inner-container">
            <p>Booking Id: addfs</p>
            <p>Movie: movie Name</p>
            <p>Seats Booked: addfs</p>
            <p>Number of Seats Booked: addfs</p>
            <p>Amount Paid: $50</p>
            <button className="profile-button">Cancel</button>
          </div>

          <div className="profile-inner-container">
            <p>Booking Id: addfs</p>
            <p>Movie: movie Name</p>
            <p>Seats Booked: addfs</p>
            <p>Number of Seats Booked: addfs</p>
            <p>Amount Paid: $50</p>
            <button className="profile-button">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
