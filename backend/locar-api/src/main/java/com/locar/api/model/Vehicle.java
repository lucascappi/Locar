package com.locar.api.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "vehicles")
public class Vehicle {
	
	@Id
	private String id;
	
	private String brand;
	
	private String model;
	
	private Double km;
	
	private Integer year;
	
	private String image;
	
	private List<String> colors;	

	public Vehicle() {
		super();
	}
	
	public Vehicle(String brand, String model, Double km, Integer year, String image, List<String> colors) {
		super();
		this.brand = brand;
		this.model = model;
		this.km = km;
		this.year = year;
		this.image = image;
		this.colors = colors;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public Double getKm() {
		return km;
	}

	public void setKm(Double km) {
		this.km = km;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<String> getColors() {
		return colors;
	}

	public void setColors(List<String> colors) {
		this.colors = colors;
	}
	
}