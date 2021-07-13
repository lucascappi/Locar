package com.locar.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.locar.api.model.User;

public interface UserRepository extends MongoRepository<User, String>{

}
