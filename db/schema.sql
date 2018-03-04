DROP DATABASE IF EXISTS fitness_db;

CREATE DATABASE fitness_db;

USE fitness_db;

CREATE TABLE workout (
	id INT NOT NULL AUTO_INCREMENT,
	exercise_name VARCHAR(30) NOT NULL,
	exercise_completed BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);