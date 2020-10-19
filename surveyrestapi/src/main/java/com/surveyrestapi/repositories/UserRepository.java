package com.surveyrestapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.surveyrestapi.models.User;

public interface UserRepository extends JpaRepository<User, String> {
	
}
