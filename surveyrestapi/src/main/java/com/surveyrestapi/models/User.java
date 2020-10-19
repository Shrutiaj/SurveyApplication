package com.surveyrestapi.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="Users")
public class User {

	@Id
	@Column(name="username")
	private String username;
	
	@Column(name="password")
	private String password;
	
	@Column(name="admin")
	private boolean admin;
	
	@OneToMany(mappedBy = "user")
    private Set<SubmittedSurvey> submittedSurveys = new HashSet<SubmittedSurvey>();
	

	public User() {
		super();
	}

	public User(String username, String password, boolean admin) {
		super();
		this.username = username;
		this.password = password;
		this.admin = admin;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean admin() {
		return admin;
	}

	public void setAdmin(boolean admin) {
		this.admin = admin;
	}

	public Set<SubmittedSurvey> getSubmittedSurveys() {
		return submittedSurveys;
	}

	public void setSubmittedSurveys(Set<SubmittedSurvey> submittedSurveys) {
		this.submittedSurveys = submittedSurveys;
	}	
}
