package com.brillio.movie.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.brillio.movie.model.Movie;
import com.brillio.movie.payload.SetOccupiedRequest;
import com.brillio.movie.repository.MovieRepository;




@RestController

public class MovieController {

@Autowired
MovieRepository movieRepository;



	@GetMapping("/movies/{movieId}")
	public Movie getMovieDetails(@PathVariable String movieId) {
		return movieRepository.findByMovieId(movieId).get();
	
	}
	
	@GetMapping("/movies/price/{movieId}")
	public String getPriceByMovie(@PathVariable String movieId) {
		Movie movie = movieRepository.findByMovieId(movieId).get();
		return movie.getPrice();
	
	}

	@PutMapping("/setoccupied/{movieId}")
	public ResponseEntity<?> setOccupiedSeats( @PathVariable String movieId,@RequestBody SetOccupiedRequest setOccupiedRequest) {
		Optional<Movie> movie=movieRepository.findByMovieId(movieId);
		if(movie.isEmpty())
			return new ResponseEntity<>("Movie Not Found", HttpStatus.NOT_FOUND);
		Movie updatedMovie=movie.get();
		List<Integer> newOccupied=updatedMovie.getOccupiedSeats();
		newOccupied.addAll(setOccupiedRequest.getSelected());
		Integer newTotalOccupied = newOccupied.size();
		updatedMovie.setOccupiedSeats(newOccupied);
		updatedMovie.setTotalSeatsOccupied(newTotalOccupied);
		movieRepository.save(updatedMovie);
		return ResponseEntity.ok(newOccupied); 
	}
	@GetMapping("/aaa")
	public String getAaa() {
		return "Aaaaaaaaaa";
	}
}