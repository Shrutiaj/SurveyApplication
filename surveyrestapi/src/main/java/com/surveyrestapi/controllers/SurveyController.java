package com.surveyrestapi.controllers;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.surveyrestapi.dao.*;
import com.surveyrestapi.models.*;

@RestController
@RequestMapping("/Survey")
@CrossOrigin(origins = "*")
public class SurveyController {

	@Autowired 
	CustomerDAO customerDAO;
	@Autowired
	SurveyDAO surveyDAO;
	@Autowired
	UserDAO userDAO;
	@Autowired
	SubmittedSurveyDAO submittedSurveyDAO;
	
	@PostMapping("/customers/createCustomer")
	public Customer createCustomer(@Valid @RequestBody Customer cust) {
		return customerDAO.save(cust);
	}
	
	@PostMapping("/saveSurvey")
	public void saveSurvey(@Valid @RequestBody String submittedSurvey) throws JsonParseException, 
    JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		List<SubmittedSurvey> subSurveyList = Arrays.asList(mapper.readValue(submittedSurvey, SubmittedSurvey[].class));
		for(SubmittedSurvey subsurvey: subSurveyList) {
			submittedSurveyDAO.save(subsurvey);
		}		
	}
	
	@PostMapping("/updateSurvey")
	public void updateSurvey(@Valid @RequestBody String submittedSurvey) throws JsonParseException, 
    JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		List<SubmittedSurvey> subSurveyList = Arrays.asList(mapper.readValue(submittedSurvey, SubmittedSurvey[].class));
		for(SubmittedSurvey subsurvey: subSurveyList) {
			submittedSurveyDAO.update(subsurvey);
		}		
	}
	
	@GetMapping("customers/all")
	public List<Customer> getAllCustomers(){
		return customerDAO.findAll();
	}
	
	@GetMapping("/users/all")
	public List<User> getAllUsers(){
		return userDAO.findAll();
	}
	
	@GetMapping("/user/isValid")
	public boolean isValidUser(@RequestParam String username, @RequestParam String password)
	{
		User userDetails = userDAO.getByUsername(username);
		if(username.equals(userDetails.getUsername()))
		{
			if(password.equals(userDetails.getPassword())) {
				return true;
			}			
		}
		return false;
	}
	
	@GetMapping("/user/getUser")
	public User getUser(@RequestParam String username)
	{
		return userDAO.getByUsername(username);
	}
	
	@GetMapping("/user/SubmittedSurveys")
	public List<SubmittedSurvey> getSubmittedSurveyList(String username){
		return submittedSurveyDAO.findAll(username);
	}
	
	@GetMapping("/customer/byId")
	public Customer getCustomerById(Long customerId)
	{
		return customerDAO.getCustomerById(customerId);
	}
	
	@GetMapping("/survey/byId")
	public Survey getSurveyById(Long surveyId)
	{
		return surveyDAO.getSurveyById(surveyId);
	}
	
}
