package com.surveyrestapi.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

//import org.hibernate.annotations.OnDelete;
//import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonBackReference;
//import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name="Surveys")
public class Survey {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="survey_id")
	private long surveyId;

	@Column(name="customer_id")
	private long customerId;
	
	@Column(name="survey_name")
	private String surveyName;
	
	@ManyToOne
	@JoinColumn (name="customer_id",insertable = false, updatable = false)
	@JsonBackReference
	private Customer customer;
	
	@OneToMany(mappedBy = "survey")
    private Set<SurveyQuestion> surveyQuestions = new HashSet<SurveyQuestion>();

	public Survey() {}
	public Survey(long surveyId, String surveyName) {
		super();
		this.surveyId = surveyId;
		this.surveyName = surveyName;
	}
	
	public String getSurveyName() {
		return surveyName;
	}
	
	public void setSurveyName(String surveyName) {
		this.surveyName = surveyName;
	}
	
	public long getCustomerId() {
		return customerId;
	}
	
	public void setSurveyId(long surveyId) {
		this.surveyId = surveyId;
	}
	
	public long getSurveyId() {
		return surveyId;
	}
	
	public void setCustomer_id(long customerId) {
		this.customerId = customerId;
	}
	
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public Set<SurveyQuestion> getSurveyQuestions() {
		return surveyQuestions;
	}
	public void setSurveyQuestions(Set<SurveyQuestion> surveyQuestions) {
		this.surveyQuestions = surveyQuestions;
	}
	
}
