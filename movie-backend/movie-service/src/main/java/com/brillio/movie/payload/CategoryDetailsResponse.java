package com.brillio.movie.payload;

import java.util.List;

import com.brillio.movie.model.MovieCard;

public class CategoryDetailsResponse {
	
	private String category;
	private List<MovieCard> movieCards;
	public CategoryDetailsResponse() {
		super();
	}
	public CategoryDetailsResponse(String category, List<MovieCard> movieCards) {
		super();
		this.category = category;
		this.movieCards = movieCards;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public List<MovieCard> getMovieCards() {
		return movieCards;
	}
	public void setMovieCards(List<MovieCard> movieCards) {
		this.movieCards = movieCards;
	}
	
}
