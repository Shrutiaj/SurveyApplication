package com.surveyrestapi.dao;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.surveyrestapi.models.SubmittedSurvey;
import com.surveyrestapi.repositories.SubmittedSurveyRepository;

@Service
public class SubmittedSurveyDAO {

	@Autowired
	SubmittedSurveyRepository submittedSurveyRepository;
	EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("survey");
    EntityManager entityManager = entityManagerFactory.createEntityManager();
	
	/*Search submitted surveys by username and surveyID*/
	public List<SubmittedSurvey> findAll(String username){
		return (List<SubmittedSurvey>)submittedSurveyRepository.findByUsername(username);
	}
	
	public Optional<SubmittedSurvey> save(SubmittedSurvey submittedSurvey){
		try {
			if(!entityManager.getTransaction().isActive()) {
				entityManager.getTransaction().begin();
				SubmittedSurvey survey = new SubmittedSurvey();
				survey.setAnswer(submittedSurvey.getAnswer());
				survey.setCustomerId(submittedSurvey.getCustomerId());
				survey.setQuestionId(submittedSurvey.getQuestionId());
				survey.setSurveyId(submittedSurvey.getSurveyId());
				survey.setUsername(submittedSurvey.getUsername());
				entityManager.persist(survey);
				entityManager.getTransaction().commit();
			}
			
			return Optional.of(submittedSurvey);
		}
		catch(Exception ex) {
			ex.printStackTrace();
		}
		return Optional.empty();
	}
	
	public Optional<SubmittedSurvey> update(SubmittedSurvey submittedSurvey){
		try {
			if(!entityManager.getTransaction().isActive()) {
				entityManager.getTransaction().begin();
				System.out.println(submittedSurvey.getQuestionId());
				entityManager.merge(submittedSurvey);
				entityManager.getTransaction().commit();
			}
			
			return Optional.of(submittedSurvey);
		}
		catch(Exception ex) {
			ex.printStackTrace();
		}
		return Optional.empty();
	}
}
