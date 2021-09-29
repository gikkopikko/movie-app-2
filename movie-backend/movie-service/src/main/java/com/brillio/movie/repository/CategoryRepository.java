package com.brillio.movie.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.brillio.movie.model.Category;
import com.brillio.movie.model.Movie;

@Repository
public interface CategoryRepository  extends MongoRepository<Category, String>{

}
