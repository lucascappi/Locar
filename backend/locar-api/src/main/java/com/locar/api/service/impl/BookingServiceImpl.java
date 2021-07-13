package com.locar.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.locar.api.model.Booking;
import com.locar.api.repository.BookingRepository;
import com.locar.api.service.BookingService;

@Service
public class BookingServiceImpl implements BookingService{
	
	@Autowired
	private BookingRepository bookingRepository;
	
	@Override
	public Booking createBooking(Booking booking) {
		return this.bookingRepository.save(booking);
	}
	
	@Override
	public List<Booking> findAll() {
		return this.bookingRepository.findAll();
	}

}
