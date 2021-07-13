package com.locar.api.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.locar.api.model.User;

public interface UserRepository extends MongoRepository<User, String>{
	@Query("{email :?0}")
	Optional<User> getUserByEmail(String email);
	
}
