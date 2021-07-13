package com.locar.api.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.locar.api.model.User;
import com.locar.api.repository.UserRepository;
import com.locar.api.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;

	@Override
	public User logIn(User user) {
		String requestBodyEmail = user.getEmail();
		Optional<User> opt = this.userRepository.getUserByEmail(requestBodyEmail);
		
		if(opt.isPresent()) {
			User userExists = opt.get();
			String requestBodyName = user.getName();
			
			if(requestBodyName != userExists.getName()) {
				userExists.setName(requestBodyName);
				
				return this.userRepository.save(userExists);
			} else {
				return this.userRepository.save(userExists);
			}
		} else {
			return this.userRepository.save(user);
		}
		
	}

}
