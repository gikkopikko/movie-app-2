package com.brillio.booking.model;

import java.util.Set;

import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "customers")
public class Customer{
	private String id;
	private String username;
	private String name;
	private String email;
	private String password;
	private Set<String> roles;




	public Customer(String username, String name, String email, String password, Set<String> roles) {
		super();
		this.username = username;
		this.name = name;
		this.email = email;
		this.password = password;
		this.roles = roles;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Set<String> getRoles() {
		return roles;
	}

	public void setRoles(Set<String> roles) {
		this.roles = roles;
	}

	public Customer() {
		super();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
