CREATE DATABASE checkout;

USE checkout;

CREATE TABLE responses (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(25),
  email VARCHAR(25),
  password VARCHAR(25),
  addressLine1 VARCHAR(255),
  addressLine2 VARCHAR(255),
  city VARCHAR(25),
  state VARCHAR(25),
  zipCode VARCHAR(10),
  phoneNumber VARCHAR(20),
  creditCardNumber VARCHAR(20),
  expiryDate DATE,
  cvv VARCHAR(5),
  billingZipCode VARCHAR(10)
);