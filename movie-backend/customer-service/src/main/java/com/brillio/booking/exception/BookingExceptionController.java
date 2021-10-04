package com.brillio.booking.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class BookingExceptionController {

	@ExceptionHandler(value = RecordNotFoundException.class)
	public ResponseEntity<String> handelRecordNotFoundException(RecordNotFoundException re) {
		return new ResponseEntity<String>("The Records Is Not Present In the Database.", HttpStatus.NOT_FOUND);
	}

}
