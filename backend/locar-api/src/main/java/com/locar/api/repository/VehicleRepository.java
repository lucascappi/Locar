package com.locar.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.locar.api.model.Vehicle;

public interface VehicleRepository extends MongoRepository<Vehicle, String>{
	
}