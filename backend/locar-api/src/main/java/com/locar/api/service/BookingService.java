package com.locar.api.service;

import java.util.List;

import com.locar.api.model.Booking;

public interface BookingService {
	public Booking createBooking(Booking booking);
	
	public List<Booking> findAll();
}
