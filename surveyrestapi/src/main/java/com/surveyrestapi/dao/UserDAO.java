package com.surveyrestapi.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.surveyrestapi.models.User;
import com.surveyrestapi.repositories.UserRepository;

@Service
public class UserDAO {

	@Autowired
	UserRepository userRepository;
	
	/* save a user */
	public User save(User user) {
		return userRepository.save(user);
	}
	
	/* search all users */
	public List<User> findAll(){
		return (List<User>)userRepository.findAll();
	}
	
	// get a user 
	public User getByUsername(String username) {
		User U1 = userRepository.getOne(username);
		return U1;
	}
	
	/* delete a user */
	public void delete(User user) {
		userRepository.delete(user);
	}
}
