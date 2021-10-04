package com.brillio.movie.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.brillio.movie.model.Movie;
import com.brillio.movie.repository.CategoryRepository;
import com.brillio.movie.repository.MovieRepository;

@SpringBootTest
@RunWith(MockitoJUnitRunner.class)
@WebMvcTest
public class MovieControllerTest {
	@InjectMocks
	private MovieController movieController;
	@Mock
	private MovieRepository movieRepository;
	@Mock
	private CategoryRepository categoryRepository;
	
	private MockMvc mockmvc;
	
	@Before
	public void setUp() {
		mockmvc=MockMvcBuilders.standaloneSetup(movieController).build();

	}
	
	@Test
	public void getMovieDetailsTest() throws Exception {
		String mid="horror1";
		List<Integer> lst1=new ArrayList<>();
		List<String> lst2=new ArrayList<>();
		lst1.add(1);
		lst1.add(5);
		lst2.add("pp");
		lst2.add("kk");
		
		  Movie movie=new Movie("horror1", "horror", "Malignant", "Good Movie","10",
				                 6,lst1 , 2, lst2, "David Dhawan",
		                     "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/");
		  movie.setId("123456");
		 
		  when(movieRepository.findByMovieId(mid)).thenReturn(Optional.of(movie));
		  mockmvc.perform(MockMvcRequestBuilders.get("/movies/{mid}")).andExpect(MockMvcResultMatchers.status().isOk());
		 
		/*
		 * Optional<Movie> empty = Optional.empty(); assertFalse(empty.isPresent());
		 */
		 
		//assertEquals(1, movieRepository.findByMovieId(id));

	}


}
