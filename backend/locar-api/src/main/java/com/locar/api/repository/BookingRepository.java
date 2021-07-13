package com.locar.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.locar.api.model.Booking;

public interface BookingRepository extends MongoRepository<Booking, String> {

}
