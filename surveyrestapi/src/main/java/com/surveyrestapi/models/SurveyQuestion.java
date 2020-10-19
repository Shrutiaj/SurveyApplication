package com.surveyrestapi.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="SurveyQuestions")
public class SurveyQuestion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="question_id")
	private Long questionId;
	
	@Column(name="survey_id")
	private long surveyId;
	
	@ManyToOne
	@JoinColumn (name="survey_id",insertable = false, updatable = false)
	@JsonBackReference
	private Survey survey;
	
	private String question;

	public SurveyQuestion()
	{
		
	}
	
	public SurveyQuestion(Long questionId, Long surveyId, String question) {
		super();
		this.questionId = questionId;
		this.surveyId = surveyId;
		this.question = question;
	}

	public Long getQuestionId() {
		return questionId;
	}

	public void setQuestionId(Long questionId) {
		this.questionId = questionId;
	}

	public Long getSurveys() {
		return surveyId;
	}

	public void setSurveys(Long surveyId) {
		this.surveyId = surveyId;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}
	
}
