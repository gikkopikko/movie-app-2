import React, { Component } from "react";

import axios from "axios";
import { Form, Table } from "react-bootstrap";
import "../css/profile.css";
import Input from "./Input";
import Button from "./Button";

let api = axios.create({ baseURL: "http://localhost:9091" });

class Profile extends Component {
  state = {
    userData: [],

    bookingData: [],
    username: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    api
      .get("/users/" + this.state.username)
      .then((res) => {
        const x = res.data;
        this.setState({
          UserData: x,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .get("/bookings/" + this.state.username)
      .then((res) => {
        const x = res.data;
        this.setState({
          bookingData: x,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div className="profile-container">
          <Form>
            <Input
              id="username"
              name="username"
              handleChange={(e) => this.setState({ username: e.target.value })}
              label="username"
            />
            <Button onClick={this.handleSubmit} value="Search" />
          </Form>

          <div>
            {this.state.userData.map((x) => {
              return (
                <div className="inner-container">
                  <table>
                    <tr>
                      <td>{x.name}</td>
                      <td>{x.username}</td>
                      <td>{x["email"]}</td>
                    </tr>
                  </table>
                </div>
              );
            })}
          </div>
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
