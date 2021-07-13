package com.locar.api.service.impl;

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
		return this.userRepository.save(user);
	}

}
