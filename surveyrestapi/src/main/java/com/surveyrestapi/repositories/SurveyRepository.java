package com.surveyrestapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;

import com.surveyrestapi.models.Survey;

public interface SurveyRepository extends JpaRepository<Survey, Long>{
	Survey findSurveyBySurveyId(Long survey_id);
}
