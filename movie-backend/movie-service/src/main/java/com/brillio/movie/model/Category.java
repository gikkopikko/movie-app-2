package com.brillio.movie.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="categories")
public class Category {
String id;
String categoryName;
public Category() {
	super();
}
public Category(String categoryName) {
	super();
	this.categoryName = categoryName;
}
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getCategoryName() {
	return categoryName;
}
public void setCategoryName(String categoryName) {
	this.categoryName = categoryName;
}

}
