package com.brillio.movie.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.brillio.movie.model.Movie;

@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {

	Optional<Movie> findByMovieId(String movieName);
	List<Movie> findAllByCategory(String category);

//	Movie findByMovieName(String movieName);


}
