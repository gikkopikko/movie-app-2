package com.brillio.booking.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.brillio.auth.repository.CustomerBookingRepository;
import com.brillio.auth.repository.CustomerRepository;
import com.brillio.booking.model.CustomerBooking;
import com.brillio.booking.payload.BookingRequest;
import com.brillio.booking.model.Customer;

@RestController
@CrossOrigin
public class BookingController {

	String url = "http://localhost:9095/movies/price/";

	@Autowired
	CustomerBookingRepository customerBookingRepository;

	@Autowired
	CustomerRepository customerRepository;

	@GetMapping("/bookings/{username}")
	public ResponseEntity<?> getCustomerBookings(@PathVariable String username) {
		List<CustomerBooking> customerBookings = customerBookingRepository.findAllByUsername(username);
		return ResponseEntity.ok(customerBookings);

	}

	@GetMapping("/users")
	public ResponseEntity<?> getAllCustomers() {
		List<Customer> customer = customerRepository.findAll();
		return ResponseEntity.ok(customer);

	}

	@GetMapping("/users/{username}")
	public ResponseEntity<?> getCustomers(@PathVariable String username) {
		Optional<Customer> customer = customerRepository.findByUsername(username);
		return ResponseEntity.ok(customer);

	}

	@PostMapping("/current/book")
	public String insertStudent(@RequestBody BookingRequest bookingRequest) {
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
//				double amount = bookingRequest.getSelected().size() * movie_price;
//				amountPaid = Double.toString(amount);
				newCustomerBooking = new CustomerBooking(bookingRequest.getUsername(), bookingRequest.getMovieId(),
						bookingRequest.getMovieName(), bookingRequest.getSelected(), "0");
			} else {

				newCustomerBooking = customerBooking.get();
				List<Integer> newSeatsBooked = newCustomerBooking.getSeatsBooked();
				newSeatsBooked.addAll(bookingRequest.getSelected());
				newCustomerBooking.setSeatsBooked(newSeatsBooked);
//				double amount = newSeatsBooked.size() * movie_price;
//				amountPaid = Double.toString(amount);
//				newCustomerBooking.setAmountPaid(amountPaid);
			}
			double amount = newCustomerBooking.getSeatsBooked().size() * movie_price;
			amountPaid = Double.toString(amount);
			newCustomerBooking.setAmountPaid(amountPaid);

			customerBookingRepository.save(newCustomerBooking);
			return ("Data is inserted " + amountPaid);

		} catch (Exception e) {
			return (e.getMessage());
		}

	}

//	@PostMapping("/signup")
//	public ResponseEntity<?> registerUser(@RequestBody SignUpRequest signUpRequest) {
//		if (customerRepository.existsByUsername(signUpRequest.getUsername())) {
//			return new ResponseEntity(new ApiResponse(false, "Username is already taken!"), HttpStatus.BAD_REQUEST);
//		}
//
//		// Creating user's account
//		Customer customer = new Customer(signUpRequest.getUsername(), signUpRequest.getName(),
//				signUpRequest.getPassword());
//
//		customer.setPassword(passwordEncoder.encode(customer.getPassword()));
//
//		Customer result = customerRepository.save(customer);
//
//		URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/users/{username}")
//				.buildAndExpand(result.getUsername()).toUri();
//
//		return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
//	}
	@GetMapping("/aaa")
	public String getAaa() {
		return "Aaaaaaaaaa";
	}
}