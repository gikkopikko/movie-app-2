import React from 'react';
import axios from "axios";

export default class MovieBooking extends React.Component{
    constructor(props){
        super(props);
    }

    deleteBooking = (id) => {
         fetch('localhost:9091/booking/delete/'+id, {
            method: 'DELETE',
           })
           .then(res => res.text())
           .then(res => console.log(res))
           .catch((error) => {
            console.log(error);
          });
           
        
    }

    render(){
        return(
            <div className="profile-inner-container">
                <p>Booking Id: {this.props.data.id}</p>
                <p>Movie: {this.props.data.movieName}</p>
                <p>Seats Booked: {this.props.data.seatsBooked}</p>
                <p>Number of Seats Booked: {this.props.data.numberOfSeats}</p>
                <p>Amount Paid: {this.props.data.amountPaid}</p>
                <button className="profile-button" onClick={this.deleteBooking(this.props.data.id)}>Cancel</button>
          </div>
        );
    }
}