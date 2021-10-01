package com.brillio.booking.payload;

import java.util.List;

public class SignUpRequest {

	private String username;
	private String movieId;
	private String movieName;
	private List<Integer> seatsBooked;
	
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

	
}
