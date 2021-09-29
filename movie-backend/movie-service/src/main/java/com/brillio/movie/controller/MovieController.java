package com.brillio.movie.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.brillio.movie.model.Movie;
import com.brillio.movie.payload.SetOccupiedRequest;
import com.brillio.movie.repository.MovieRepository;




@RestController
@CrossOrigin
public class MovieController {

@Autowired
MovieRepository movieRepository;



	@GetMapping("/movies/{movieId}")
	public Movie getMovieDetails(@PathVariable String movieId) {
		return movieRepository.findByMovieId(movieId).get();
	
	}

	@GetMapping("/movies/category/{category}")
	public List<Movie> getMoviesByCategory(@PathVariable String category){
		return movieRepository.findByCategory(category);
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