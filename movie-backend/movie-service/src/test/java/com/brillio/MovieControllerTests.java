package com.brillio;

import com.brillio.movie.controller.MovieController;
import com.brillio.movie.model.Movie;
import com.brillio.movie.payload.CategoryDetailsResponse;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.Assert.*;

@SpringBootTest
class MovieControllerTests {

	@Autowired
	MovieController controler;

	@Test
	void getsAMovie() {
		Movie movie = controler.getMovieDetails("horror1");
		assertNotNull(movie);
	}

	@Test
	void getsHorrorMovies() {
		List<Movie> movies = controler.getMoviesByCategory("horror");
		assertNotNull(movies);
	}

	@Test
	void getsAllCategories() {
		List<CategoryDetailsResponse> categories = controler.getAllCategoryDetails();
		assertNotNull(categories);
	}

	@Test
	void getsCurrentCategories() {
		int current_categories = 3;
		List<CategoryDetailsResponse> categories = controler.getAllCategoryDetails();
		assertEquals(categories.size(),current_categories);
	}
}
