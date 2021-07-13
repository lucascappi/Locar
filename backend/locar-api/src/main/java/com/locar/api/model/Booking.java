package com.locar.api.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "bookings")
public class Booking {
	
	@Id
	private String id;
	
	private String userId;
	
	private Vehicle vehicle;
	
	private Date pickUpDate;
	
	private Date dropOffDate;

	public Booking(String userId, Vehicle vehicle, Date pickUpDate, Date dropOffDate) {
		super();
		this.userId = userId;
		this.vehicle = vehicle;
		this.pickUpDate = pickUpDate;
		this.dropOffDate = dropOffDate;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public Vehicle getVehicle() {
		return vehicle;
	}

	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}

	public Date getPickUpDate() {
		return pickUpDate;
	}

	public void setPickUpDate(Date pickUpDate) {
		this.pickUpDate = pickUpDate;
	}

	public Date getDropOffDate() {
		return dropOffDate;
	}

	public void setDropOffDate(Date dropOffDate) {
		this.dropOffDate = dropOffDate;
	}
	
}
