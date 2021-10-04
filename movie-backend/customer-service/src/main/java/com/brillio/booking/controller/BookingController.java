package com.brillio.booking.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.brillio.booking.model.Customer;
import com.brillio.booking.model.CustomerBooking;
import com.brillio.booking.repository.CustomerBookingRepository;
import com.brillio.booking.repository.CustomerRepository;
import com.brillio.booking.service.BookingService;


@RestController

public class BookingController {

@Autowired
CustomerBookingRepository customerBookingRepository;

@Autowired
CustomerRepository customerRepository;

@Autowired
BookingService bookingService;


	@GetMapping("/bookings/{username}")
	public ResponseEntity<?> getCustomerBookings(@PathVariable String username) {
		List<CustomerBooking> customerBookings= customerBookingRepository.findAllByUsername(username);
		return ResponseEntity.ok(customerBookings);
	
	}
	
	
	@GetMapping("/users")
	public ResponseEntity<?> getAllCustomers() {
		List<Customer> customer= bookingService.getAllCustomers();
		System.out.println("Data from DB"+customer);
		return new ResponseEntity<List<Customer>>(customer, HttpStatus.OK);
	
	}

	
	@GetMapping("/users/{username}")
	public ResponseEntity<Customer> getCustomers(@PathVariable("username") String userName) {
		Customer findCustomerByUsername = bookingService.findCustomerByUsername(userName);
		System.out.println("From Domy DB"+findCustomerByUsername);
		return new ResponseEntity<Customer>(findCustomerByUsername, HttpStatus.OK);
	
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