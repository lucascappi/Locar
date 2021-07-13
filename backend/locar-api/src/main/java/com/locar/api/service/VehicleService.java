package com.locar.api.service;

import java.util.List;

import com.locar.api.model.Vehicle;

public interface VehicleService {
	public List<Vehicle> findAll();
	
	public Vehicle getById(String id);
	
	public Vehicle create(Vehicle vehicle);
}

