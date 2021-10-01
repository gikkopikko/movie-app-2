package com.brillio.auth.repository;

import com.brillio.booking.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {

    Optional<Movie> findByMovieId(String movieName);
    List<Movie> findAllByCategory(String category);

}
