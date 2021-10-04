package com.brillio.booking.controller;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import com.brillio.booking.model.Customer;
import com.brillio.booking.repository.CustomerRepository;
import com.brillio.booking.service.BookingServiceImpl;

@RunWith(MockitoJUnitRunner.class)
public class BookingServiceTest {

	@InjectMocks
	private BookingServiceImpl bookingService;
	@Mock
	private CustomerRepository custRepo;
	

	@Before
	public void setUp() {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void getAllCustomerTest() throws Exception {
     
		Customer c=new Customer("Rakesh","rak","Rakesh@123");
	
		
		Customer c1=new Customer("rakesh","Rakesh.patel","Rakesh@123");
		

		given(custRepo.findAll()).willReturn(Arrays.asList(c, c1));

		// calling method under the test
		List<Customer> result = bookingService.getAllCustomers();

		// assert respond has 3 objects
		assertThat(result).hasSize(2);

		// assert
		assertMemberFields(result.get(0));

		// verify that repository was called
		verify(custRepo, times(1)).findAll();

	}
	 private void assertMemberFields(Customer member) {
	        assertThat(member.getName()).isEqualTo("rak");
	        assertThat(member.getUsername()).isEqualTo("Rakesh");
	        assertThat(member.getPassword()).isEqualTo("Rakesh@123");
	    }
}
