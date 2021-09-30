package com.brillio.movie.model;

public class MovieCard {
private String movieId;
private String movieName;
private String posterURL;
public MovieCard(String movieId, String movieName, String posterURL) {
	super();
	this.movieId = movieId;
	this.movieName = movieName;
	this.posterURL = posterURL;
}
public MovieCard() {
	super();
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
public String getPosterURL() {
	return posterURL;
}
public void setPosterURL(String posterURL) {
	this.posterURL = posterURL;
}

}
