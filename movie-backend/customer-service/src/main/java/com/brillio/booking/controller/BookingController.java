package com.brillio.booking.controller;


import java.util.List;
import java.util.Optional;

//import com.brillio.auth.repository.MovieRepository;
//import com.brillio.booking.model.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.brillio.auth.repository.CustomerBookingRepository;
import com.brillio.auth.repository.CustomerRepository;
import com.brillio.booking.model.CustomerBooking;
import com.brillio.booking.payload.ApiResponse;
import com.brillio.booking.payload.BookingRequest;
import com.brillio.booking.payload.SetOccupiedRequest;
import com.brillio.booking.model.Customer;


@RestController
@CrossOrigin
public class BookingController {

	 String url = "http://localhost:9095/movies/price/";
	
     @Autowired
     CustomerBookingRepository customerBookingRepository;

     @Autowired
     CustomerRepository customerRepository;


//	@Autowired
//	MovieRepository movieRepository;

	@GetMapping("/bookings/{username}")
	public ResponseEntity<?> getCustomerBookings(@PathVariable String username) {
		List<CustomerBooking> customerBookings= customerBookingRepository.findAllByUsername(username);
		return ResponseEntity.ok(customerBookings);
	
	}
	
	@DeleteMapping("booking/delete/{id}")
	public ResponseEntity<String> deleteBooking(@PathVariable String id){
		RestTemplate template = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		
		Optional<CustomerBooking> booking = customerBookingRepository.findById(id);
		if(booking.isPresent()){
			String movieId = booking.get().getMovieId();
			List<Integer> seatsBooked = booking.get().getSeatsBooked();
			SetOccupiedRequest setOccupiedRequest = new SetOccupiedRequest(seatsBooked);

			HttpEntity<SetOccupiedRequest> entity = new HttpEntity<>(setOccupiedRequest,headers);
			
			ResponseEntity<String> response = template.exchange("http://localhost:9095/deleteoccupied/" +movieId, HttpMethod.PUT,
					entity, String.class);
			customerBookingRepository.deleteById(id);
//			Optional<Movie> movieOptional = movieRepository.findByMovieId(movieId);
//			if(movieOptional.isPresent()){
//				Movie movie = movieOptional.get();
//				List<Integer> occupiedSeats = movie.getOccupiedSeats();
//				occupiedSeats.removeAll(seatsBooked);
//				movie.setOccupiedSeats(occupiedSeats);
//				movieRepository.save(movie);
//			}

			return new ResponseEntity<>("Deleted successfully", HttpStatus.OK);
		}
		return new ResponseEntity<>("Could not delete", HttpStatus.PRECONDITION_FAILED);
	}
	
	@GetMapping("/users")
	public ResponseEntity<?> getAllCustomers() {
		List<Customer> customer= customerRepository.findAll();
		return ResponseEntity.ok(customer);
	
	}

	
	@GetMapping("/users/{username}")
	public ResponseEntity<?> getCustomers(@PathVariable String username) {
		Optional<Customer> customer= customerRepository.findByUsername(username);
		return ResponseEntity.ok(customer);
	
	}
	

	@PostMapping("/current/book")
	public ResponseEntity<?> createBooking(@RequestBody BookingRequest bookingRequest) {

		try {
			RestTemplate template = new RestTemplate();
			String amountPaid;
			HttpHeaders headers = new HttpHeaders();
			HttpEntity<String> entity = new HttpEntity<String>(headers);
			ResponseEntity<String> response = template.exchange(url + bookingRequest.getMovieId(), HttpMethod.GET,
					entity, String.class);
			String price = response.getBody();
			double movie_price = Double.parseDouble(price);

			Optional<CustomerBooking> customerBooking = customerBookingRepository
					.findByUsernameAndMovieId(bookingRequest.getUsername(), bookingRequest.getMovieId());
			
			CustomerBooking newCustomerBooking;
			
			if (customerBooking.isEmpty()) {
				newCustomerBooking = new CustomerBooking(bookingRequest.getUsername(), bookingRequest.getMovieId(),
						bookingRequest.getMovieName(), bookingRequest.getSelected(), "0");
			} else {

				newCustomerBooking = customerBooking.get();
				List<Integer> newSeatsBooked = newCustomerBooking.getSeatsBooked();
				newSeatsBooked.addAll(bookingRequest.getSelected());
				newCustomerBooking.setSeatsBooked(newSeatsBooked);
			}
			
			double amount = newCustomerBooking.getSeatsBooked().size() * movie_price;
			amountPaid = Double.toString(amount);
			newCustomerBooking.setAmountPaid(amountPaid);

			customerBookingRepository.save(newCustomerBooking);
			return ResponseEntity.ok(new ApiResponse(true,"Booking created. Total amount paid: "+amountPaid));

		} catch (Exception e) {
			return new ResponseEntity<>(new ApiResponse(false,e.getMessage()),HttpStatus.BAD_REQUEST);
		}

	}
	@GetMapping("/booking/{username}/{movieId}")
	public ResponseEntity<?> getBookingDetails(@PathVariable String username,@PathVariable String movieId) {
		Optional<CustomerBooking> customerBooking= customerBookingRepository.findByUsernameAndMovieId(username, movieId);
		if(customerBooking.isEmpty())
			return  new ResponseEntity<Object>("booking not found", HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(customerBooking.get());
	}

	@GetMapping("/aaa")
	public String getAaa() {
		return "Aaaaaaaaaa";
	}
}