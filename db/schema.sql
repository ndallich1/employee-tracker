-- drops employee_db if it currently exists
DROP DATABASE IF EXISTS employee_db;
-- creates employee_db database
CREATE DATABASE employee_db;

-- Use employee_db 
USE employee_db;

-- See database in use 
SELECT DATABASE();

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,    
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,    
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) -- calls out the row in this table that is foreign (from a table that is not this one)
  REFERENCES department(id) -- references the id row in the department table
  ON DELETE SET NULL -- removes the department id from the department_id row if the id is removed from the "department" table 
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id) -- references the id row in the role table 
    ON DELETE SET NULL, -- removes the role id from the employee_id row if the id is removed from the "role" table
  manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);
