package com.surveyrestapi.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="Customers")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "customer_id")
	private long customerId;
	
	@NotBlank
	@Column(name = "customer_name")
	private String customerName;

	@OneToMany(mappedBy = "customer")
    private Set<Survey> surveys = new HashSet<Survey>();
		
	public Customer() {}
	
	public Customer(String customerName) {
		super();
		this.customerName = customerName;
	}

	public Set<Survey> getSurveys() {
		return surveys;
	}
	
	public void setSurveys(Set<Survey> surveys) {
		this.surveys = surveys;
	}
	
	public long getCustomerId() {
		return customerId;
	}
	
	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}
	
	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
}
