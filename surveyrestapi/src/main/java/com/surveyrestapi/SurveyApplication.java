package com.surveyrestapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SurveyApplication {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SpringApplication.run(SurveyApplication.class, args);
	}

}
