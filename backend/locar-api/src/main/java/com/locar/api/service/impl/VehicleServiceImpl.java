package com.locar.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.locar.api.model.Vehicle;
import com.locar.api.repository.VehicleRepository;
import com.locar.api.service.VehicleService;

@Service
public class VehicleServiceImpl implements VehicleService{

	@Autowired
	private VehicleRepository vehicleRepository;
	
	@Override
	public List<Vehicle> findAll() {
		return this.vehicleRepository.findAll();
	}

	@Override
	public Vehicle getById(String id) {
		return this.vehicleRepository
				.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("Veículo não encontrado"));
	}

	@Override
	public Vehicle create(Vehicle vehicle) {		
		return this.vehicleRepository.save(vehicle);
	}

}
