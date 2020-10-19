package com.surveyrestapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.surveyrestapi.models.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
	Customer findCustomerByCustomerId(Long customer_id);
}
