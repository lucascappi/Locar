package com.locar.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.locar.api.model.Vehicle;
import com.locar.api.service.VehicleService;

@CrossOrigin
@RestController
@RequestMapping("/vehicles")
public class VehicleController {
	
	@Autowired
	private VehicleService vehicleService;
	
	@GetMapping
	public List<Vehicle> findAll() {
		return this.vehicleService.findAll();
	}
	
	@GetMapping("/{id}") 
	public Vehicle getById(@PathVariable String id) {
		return this.vehicleService.getById(id);
	}
	
	@PostMapping
	public Vehicle create(@RequestBody Vehicle vehicle) {
		return this.vehicleService.create(vehicle);
	}
}
