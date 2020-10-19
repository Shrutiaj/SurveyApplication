package com.surveyrestapi.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="SubmittedSurveys", schema = "surveyapp")
public class SubmittedSurvey {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String answer;
	
	@Column(name="customer_id")
	private Long customerId;
	
	private String username;

	@Column(name="survey_id")
	private Long surveyId;
	
	@Column(name="question_id")
	private Long questionId;
	
	@Transient
	private String surveyname;
	
	@ManyToOne
	@JoinColumn (name="customer_id",referencedColumnName = "customer_id", insertable = false, updatable = false)
	@JsonBackReference(value="customer")
	private Customer customer;
	
	@ManyToOne
	@JoinColumn (name="survey_id",referencedColumnName="survey_id",insertable = false, updatable = false)
	@JsonBackReference(value="survey")
	private Survey survey;
	
	@ManyToOne(optional = false)
	@JoinColumn (name="question_id",referencedColumnName="question_id",insertable = false, updatable = false)
	@JsonBackReference(value="surveyQuestion")
	private SurveyQuestion surveyQuestion;
	
	@ManyToOne
	@JoinColumn (name="username",insertable = false, updatable = false)
	@JsonBackReference(value="user")
	private User user;
		
	public SubmittedSurvey() {}
	
	public SubmittedSurvey(String answer) {
		super();
		this.answer = answer;
	}	
	
//	public SubmittedSurvey(SubmittedSurvey submittedSurvey) {
//		this.answer = submittedSurvey.answer;
//		this.customerId = submittedSurvey.customerId;
//		this.surveyId = submittedSurvey.surveyId;
//		this.questionId = submittedSurvey.questionId;
//		this.surveyname = submittedSurvey.surveyname;
//	}

	public SubmittedSurvey(String answer, Long surveyId) {
		super();
		this.answer = answer;
		this.surveyId = surveyId;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAnswer() {
		return answer;
	}

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Long getSurveyId() {
		return surveyId;
	}

	public void setSurveyId(Long surveyId) {
		this.surveyId = surveyId;
	}

	public Long getQuestionId() {
		return questionId;
	}

	public void setQuestionId(Long questionId) {
		this.questionId = questionId;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Survey getSurvey() {
		return survey;
	}

	public void setSurvey(Survey survey) {
		this.survey = survey;
	}

	public SurveyQuestion getSurveyQuestion() {
		return surveyQuestion;
	}

	public void setSurveyQuestion(SurveyQuestion surveyQuestion) {
		this.surveyQuestion = surveyQuestion;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getSurveyname() {
		return this.survey.getSurveyName();
	}

	public void setSurveyname(String surveyname) {
		this.surveyname = surveyname;
	}
	
}
