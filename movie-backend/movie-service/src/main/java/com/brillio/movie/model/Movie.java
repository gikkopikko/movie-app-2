package com.brillio.movie.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "movies")
public class Movie {
	String id;
	String movieId;
	String category;
	String movieName;
	String description;
	String price;
	Integer rating;
	List<Integer> occupiedSeats;
	Integer totalSeatsOccupied;
	List<String> actors;
	String director;
	String posterURL;

	public Movie() {
		super();
	}



	public Movie(String movieId, String category, String movieName, String description, String price, Integer rating,
			List<Integer> occupiedSeats, Integer totalSeatsOccupied, List<String> actors, String director,
			String posterURL) {
		super();
		this.movieId = movieId;
		this.category = category;
		this.movieName = movieName;
		this.description = description;
		this.price = price;
		this.rating = rating;
		this.occupiedSeats = occupiedSeats;
		this.totalSeatsOccupied = totalSeatsOccupied;
		this.actors = actors;
		this.director = director;
		this.posterURL = posterURL;
	}



	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getMovieId() {
		return movieId;
	}

	public void setMovieId(String movieId) {
		this.movieId = movieId;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public List<Integer> getOccupiedSeats() {
		return occupiedSeats;
	}

	public void setOccupiedSeats(List<Integer> occupiedSeats) {
		this.occupiedSeats = occupiedSeats;
	}

	public Integer getTotalSeatsOccupied() {
		return totalSeatsOccupied;
	}

	public void setTotalSeatsOccupied(Integer totalSeatsOccupied) {
		this.totalSeatsOccupied = totalSeatsOccupied;
	}

	public List<String> getActors() {
		return actors;
	}

	public void setActors(List<String> actors) {
		this.actors = actors;
	}

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}



	public String getPosterURL() {
		return posterURL;
	}



	public void setPosterURL(String posterURL) {
		this.posterURL = posterURL;
	}
	

}
