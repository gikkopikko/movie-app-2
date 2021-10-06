package com.brillio.movie.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.brillio.movie.model.Category;
import com.brillio.movie.model.Movie;
import com.brillio.movie.model.MovieCard;
import com.brillio.movie.payload.CategoryDetailsResponse;
import com.brillio.movie.payload.SetOccupiedRequest;
import com.brillio.movie.repository.CategoryRepository;
import com.brillio.movie.repository.MovieRepository;

@RestController


@CrossOrigin

public class MovieController {

	@Autowired
	MovieRepository movieRepository;
	@Autowired
	CategoryRepository categoryRepository;

	@GetMapping("/movies/{movieId}")
	public Movie getMovieDetails(@PathVariable String movieId) {
		return movieRepository.findByMovieId(movieId).get();

	}

	@GetMapping("/movies/category/{category}")
	public List<Movie> getMoviesByCategory(@PathVariable String category){
		return movieRepository.findAllByCategory(category);
	}
	
	@GetMapping("/movies/price/{movieId}")
	public String getPriceByMovie(@PathVariable String movieId) {
		Movie movie = movieRepository.findByMovieId(movieId).get();
		return movie.getPrice();
	
	}

	@PutMapping("/setoccupied/{movieId}")
	public ResponseEntity<?> setOccupiedSeats(@PathVariable String movieId,
			@RequestBody SetOccupiedRequest setOccupiedRequest) {
		Optional<Movie> movie = movieRepository.findByMovieId(movieId);
		if (movie.isEmpty())
			return new ResponseEntity<>("Movie Not Found", HttpStatus.NOT_FOUND);
		Movie updatedMovie = movie.get();
		List<Integer> newOccupied = updatedMovie.getOccupiedSeats();
		newOccupied.addAll(setOccupiedRequest.getSelected());
		Integer newTotalOccupied = newOccupied.size();
		updatedMovie.setOccupiedSeats(newOccupied);
		updatedMovie.setTotalSeatsOccupied(newTotalOccupied);
		movieRepository.save(updatedMovie);
		return ResponseEntity.ok(newOccupied);
	}
	
	@PutMapping("/deleteoccupied/{movieId}")
	public ResponseEntity<?> deleteOccupiedSeats(@PathVariable String movieId,
			@RequestBody SetOccupiedRequest setOccupiedRequest) {
		Optional<Movie> movie = movieRepository.findByMovieId(movieId);
		if (movie.isEmpty())
			return new ResponseEntity<>("Movie Not Found", HttpStatus.NOT_FOUND);
		Movie updatedMovie = movie.get();
		List<Integer> newOccupied = updatedMovie.getOccupiedSeats();
		newOccupied.removeAll(setOccupiedRequest.getSelected());
		Integer newTotalOccupied = newOccupied.size();
		updatedMovie.setOccupiedSeats(newOccupied);
		updatedMovie.setTotalSeatsOccupied(newTotalOccupied);
		movieRepository.save(updatedMovie);
		return ResponseEntity.ok(newOccupied);
	}

	@GetMapping("/allCategoryDetails")
	public List<CategoryDetailsResponse> getAllCategoryDetails() {

		List<Category> categories = categoryRepository.findAll();

		List<CategoryDetailsResponse> allCategoryDetails = new ArrayList<>();

		for (Category category : categories) {
			CategoryDetailsResponse tempCategoryDetails = new CategoryDetailsResponse();
			
			List<Movie> movies = movieRepository.findAllByCategory(category.getCategoryName());
			tempCategoryDetails.setCategory(category.getCategoryName());
			List<MovieCard> tempMovieCardsList = new ArrayList<>();
			
			for (Movie movie : movies) {
				MovieCard tempMovieCard = new MovieCard(movie.getMovieId(),movie.getMovieName(),movie.getPosterURL());
//				tempMovieCard.setMovieId(movie.getMovieId());
//				tempMovieCard.setMovieName(movie.getMovieName());
//				tempMovieCard.setPosterURL(movie.getPosterURL());
				tempMovieCardsList.add(tempMovieCard);
			}
			tempCategoryDetails.setMovieCards(tempMovieCardsList);
			allCategoryDetails.add(tempCategoryDetails);
//			tempMovieCardsList.clear();
		}
		return allCategoryDetails;
	}


}