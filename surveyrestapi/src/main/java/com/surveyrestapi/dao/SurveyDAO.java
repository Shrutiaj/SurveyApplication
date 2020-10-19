package com.surveyrestapi.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.surveyrestapi.models.Survey;
import com.surveyrestapi.repositories.SurveyRepository;

@Service
public class SurveyDAO {
	
		@Autowired
		SurveyRepository surveyRepository;
		
		/* save a survey */
		public Survey save(Survey survey) {
			return surveyRepository.save(survey);
		}
		
		/* search all surveys */
		public List<Survey> findAll(){
			return (List<Survey>)surveyRepository.findAll();
		}
		
		/* get a Survey */
		public Survey getSurveyById(Long surveyId) {
			return surveyRepository.findSurveyBySurveyId(surveyId);
		}
		
		/* delete a survey */
		public void delete(Survey survey) {
			surveyRepository.delete(survey);
		}

}
