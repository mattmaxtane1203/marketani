CREATE TABLE Customer (
  customer_id INT AUTO_INCREMENT PRIMARY KEY,
  phone_number VARCHAR(15) NOT NULL,
  full_name VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL
);