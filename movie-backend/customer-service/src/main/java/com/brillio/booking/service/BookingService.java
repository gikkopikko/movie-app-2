package com.brillio.booking.service;

import java.util.List;

import com.brillio.booking.model.Customer;

public interface BookingService {

	
	 List<Customer> getAllCustomers();
	 
	 Customer findCustomerByUsername(String username);
}
