package com.locar.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.locar.api.model.Booking;
import com.locar.api.service.BookingService;

@CrossOrigin
@RestController
@RequestMapping("/bookings")
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	@PostMapping
	public Booking createBooking(@RequestBody Booking booking) {
		return this.bookingService.createBooking(booking);
	}
	
	@GetMapping
	public List<Booking> findAll() {
		return this.bookingService.findAll();
	}
}
