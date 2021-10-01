package com.brillio.booking.payload;

import java.util.List;

public class BookingRequest {

	private String username;
	private String movieId;
	private String movieName;
	private List<Integer> selected;
	
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
	public List<Integer> getSelected() {
		return selected;
	}
	public void setSelectedd(List<Integer> selected) {
		this.selected = selected;
	}

	
}
