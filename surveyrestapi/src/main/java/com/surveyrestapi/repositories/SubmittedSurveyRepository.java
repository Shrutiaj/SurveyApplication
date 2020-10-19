package com.surveyrestapi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.surveyrestapi.models.SubmittedSurvey;

public interface SubmittedSurveyRepository extends JpaRepository<SubmittedSurvey, Long> {
  
	List<SubmittedSurvey> findByUsername(String username);	
}
