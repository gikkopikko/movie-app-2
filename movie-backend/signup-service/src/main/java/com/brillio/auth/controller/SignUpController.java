package com.brillio.auth.controller;

import java.net.URI;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.brillio.auth.model.Customer;
import com.brillio.auth.payload.ApiResponse;
import com.brillio.auth.payload.SignUpRequest;
import com.brillio.auth.repository.CustomerRepository;



@RestController
@CrossOrigin

//@RequestMapping("/api/auth")
public class SignUpController {

//	@Autowired
//	AuthenticationManager authenticationManager;

	@Autowired
	CustomerRepository customerRepository;

//	@Autowired
//	PasswordEncoder passwordEncoder;
	
	BCryptPasswordEncoder passwordEncoder= new BCryptPasswordEncoder();

//	@Autowired
//	JwtTokenProvider tokenProvider;

//	@PostMapping("/login")
//	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
//
////		Authentication authentication = authenticationManager.authenticate(
////				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
//
////		SecurityContextHolder.getContext().setAuthentication(authentication);
//		String jwt = tokenProvider.generateToken(loginRequest.getUsername());
//		return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
//	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody SignUpRequest signUpRequest) {
		if (customerRepository.existsByUsername(signUpRequest.getUsername())) {
			return new ResponseEntity(new ApiResponse(false, "Username is already taken!"), HttpStatus.BAD_REQUEST);
		}
		Set<String> roles=new HashSet<>();
		roles.add("USER");
		// Creating user's account
		Customer customer = new Customer(signUpRequest.getUsername(), signUpRequest.getName(),
				signUpRequest.getEmail(),signUpRequest.getPassword(),roles);

		customer.setPassword(passwordEncoder.encode(customer.getPassword()));

		Customer result = customerRepository.save(customer);

		URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/users/{username}")
				.buildAndExpand(result.getUsername()).toUri();

		return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
	}
	@GetMapping("/aaa")
	public String getAaa() {
		return "Aaaaaaaaaa";
	}
}