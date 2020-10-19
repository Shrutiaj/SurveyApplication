package com.surveyrestapi.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.surveyrestapi.models.Customer;
import com.surveyrestapi.repositories.CustomerRepository;

@Service
public class CustomerDAO {

	@Autowired
	CustomerRepository customerRepository;
	
	/* save a customer */
	public Customer save(Customer cust) {
		return customerRepository.save(cust);
	}
	
	/* search all customers */
	public List<Customer> findAll(){
		return (List<Customer>)customerRepository.findAll();
	}
	
	/* get a customer */
	public Customer getCustomerById(Long customerId) {
		return customerRepository.findCustomerByCustomerId(customerId);
	}
	
	/* delete a customer */
	public void delete(Customer cust) {
		customerRepository.delete(cust);
	}
}
