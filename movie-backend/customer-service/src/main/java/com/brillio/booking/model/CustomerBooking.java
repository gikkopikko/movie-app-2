package com.brillio.booking.model;

import java.util.List;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="customerBookings")
public class CustomerBooking {
private String id;
private String username;
private String movieId;
private String movieName;
private List<Integer> seatsBooked;
private String amountPaid;
public CustomerBooking() {
	super();
}
public CustomerBooking(String username, String movieId, String movieName, List<Integer> seatsBooked,
		String amountPaid) {
	super();
	this.username = username;
	this.movieId = movieId;
	this.movieName = movieName;
	this.seatsBooked = seatsBooked;
	this.amountPaid = amountPaid;
}
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getMovieId() {
	return movieId;
}
public void setMovieId(String movieId) {
	this.movieId = movieId;
}
public String getMovieName() {
	return movieName;
}
public void setMovieName(String movieName) {
	this.movieName = movieName;
}
public List<Integer> getSeatsBooked() {
	return seatsBooked;
}
public void setSeatsBooked(List<Integer> seatsBooked) {
	this.seatsBooked = seatsBooked;
}
public String getAmountPaid() {
	return amountPaid;
}
public void setAmountPaid(String amountPaid) {
	this.amountPaid = amountPaid;
}


}
