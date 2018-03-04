DROP DATABASE IF EXISTS fitness_db;

CREATE DATABASE fitness_db;

USE fitness_db;

CREATE TABLE workout(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	exercise_name VARCHAR(30) NOT NULL,
	completed BOOLEAN NOT NULL
);

