package com.brillio.booking.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.brillio.booking.exception.RecordNotFoundException;
import com.brillio.booking.model.Customer;
import com.brillio.booking.repository.CustomerRepository;

@Service("bookingService")
public class BookingServiceImpl implements BookingService {

	@Autowired
	private CustomerRepository cusRepo;

	@Override
	public List<Customer> getAllCustomers() {
		List<Customer> findAll = cusRepo.findAll();
		if (!findAll.isEmpty()) {
			return findAll;
		} else {
			throw new RecordNotFoundException("Record Not Found In The Database");
		}
	}

	@Override
	public Customer findCustomerByUsername(String username) {
		// TODO Auto-generated method stub

		Optional<Customer> findByUsername = cusRepo.findByUsername(username);
		if (findByUsername.isPresent()) {
			return findByUsername.get();
		} else {
			throw new RecordNotFoundException("Record is present in the database");
		}
	}
}
