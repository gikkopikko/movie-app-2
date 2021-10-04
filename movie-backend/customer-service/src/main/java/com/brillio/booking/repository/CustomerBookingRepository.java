package com.brillio.booking.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.brillio.booking.model.CustomerBooking;

@Repository
public interface CustomerBookingRepository extends MongoRepository<CustomerBooking, String> {

	Optional<CustomerBooking> findById(String id);
	Boolean existsByUsername(String username);
	List<CustomerBooking> findAllByUsername(String username);
	Optional<CustomerBooking> findByUsernameAndMovieId(String username, String movieId);
}
