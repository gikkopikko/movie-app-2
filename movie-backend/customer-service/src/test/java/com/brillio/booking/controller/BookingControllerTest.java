package com.brillio.booking.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.brillio.booking.model.Customer;
import com.brillio.booking.repository.CustomerRepository;
import com.brillio.booking.service.BookingServiceImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BookingControllerTest {

	@Autowired
	private WebApplicationContext context;

	private MockMvc mockMvc;

	@MockBean
	private CustomerRepository customerRepo;

	@Before
	public void setUp() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(this.context).build();
	}

	@Test
	public void getAllCustomersTest() throws Exception {

		List<Customer> l = new ArrayList<Customer>();
		Customer c = new Customer("Rakesh", "rak", "Rakesh@123");

		Customer c1 = new Customer("rakesh", "Rakesh.patel", "Rakesh@123");
		l.add(c);
		l.add(c1);
		when(customerRepo.findAll()).thenReturn(l);

		this.mockMvc.perform(MockMvcRequestBuilders.get("/users").accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(jsonPath("$[0].name").value("rak")).andExpect(jsonPath("$[1].name").value("Rakesh.patel"));
	}
	
	@Test
	public void getCustomerByNameTest() throws Exception {

		List<Customer> l = new ArrayList<Customer>();
		Customer c = new Customer("Rakesh", "rak", "Rakesh@123");

		when(customerRepo.findByUsername("Rakesh")).thenReturn(Optional.of(c));

		this.mockMvc.perform(MockMvcRequestBuilders.get("/users/Rakesh").accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(jsonPath("$.name").value("rak"));
	}

}
