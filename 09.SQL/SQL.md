### RAW SQL Commands

```
SHOW DATABASES;

CREATE DATABASE collegeDB;

USE collegeDB;

SELECT DATABASE();

CREATE TABLE Department
(
	dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100),
    hod_name VARCHAR(100)
);

SHOW TABLES;

DESC Department;

INSERT INTO Department
VALUES
(104, 'Civil', 'Dr. Ramnikan Singh');


SELECT * FROM Department;

CREATE TABLE Student
(
	student_id INT PRIMARY KEY,
    student_name VARCHAR(100),
    age INT,
    gender VARCHAR(20),
    city VARCHAR(50),
    department_id INT,
    
    FOREIGN KEY(department_id)
    REFERENCES Department(dept_id)
);

CREATE TABLE user
(
	user_id VARCHAR(100) PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    passowrd varchar(512) NOT NULL,
    phone INT UNIQUE NOT NULL
);

DESC Student;

INSERT INTO Student
VALUES
(6, 'Khushi', 21, 'Female', 'Patna', 101);

SELECT * FROM Student;

SELECT * FROM Student
WHERE age>20;

SELECT * FROM Student
WHERE student_name='Khushi';

UPDATE Student
SET city='Aligarh'
WHERE student_id=3;


SELECT COUNT(*) FROM Department;


SELECT 
Student.student_id,
Student.student_name,
Department.dept_name,
Department.hod_name
FROM Student
INNER JOIN Department
ON Student.department_id = Department.dept_id;

-- limit for data (kitna data chahhiye.) --
SELECT * FROM Student
LIMIT 3; -- first 3 data nikal kar de dega upar se 3 data --

-- order by clause for order by data --
SELECT * FROM Student
ORDER BY age ASC;

-- Aggregate Function:-
-- COUNT();
-- MAX();
-- MIN();
-- SUM();
-- AVG();

SELECT AVG(age) FROM Student;

-- Group by clause
SELECT * FROM Student
GROUP BY student_name(s);

CREATE TABLE employees(
	id 	INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    dept VARCHAR(50),
    designation VARCHAR(30),
    salary INT,
    gender VARCHAR(20)
);

INSERT INTO employees (id, name, email, dept, designation, salary, gender)
VALUES 
(1, 'John Doe', 'john.doe@email.com', 'IT', 'Software Engineer', 75000, 'Male'),
(2, 'Jane Smith', 'jane.smith@email.com', 'HR', 'HR Manager', 68000, 'Female'),
(3, 'Robert Johnson', 'robert.j@email.com', 'Finance', 'Financial Analyst', 82000, 'Male'),
(4, 'Emily Davis', 'emily.d@email.com', 'Marketing', 'SEO Specialist', 55000, 'Female'),
(5, 'Michael Brown', 'michael.b@email.com', 'IT', 'DevOps Engineer', 90000, 'Male'),
(6, 'Linda Wilson', 'linda.w@email.com', 'Sales', 'Sales Executive', 48000, 'Female'),
(7, 'William Jones', 'william.j@email.com', 'Finance', 'Accounting Head', 95000, 'Male'),
(8, 'Elizabeth Miller', 'elizabeth.m@email.com', 'HR', 'Recruiter', 52000, 'Female'),
(9, 'David Garcia', 'david.g@email.com', 'Marketing', 'Content Strategist', 58000, 'Male'),
(10, 'Barbara Martinez', 'barbara.m@email.com', 'Sales', 'Account Manager', 71000, 'Female');


INSERT INTO employees (id, name, email, dept, designation, salary, gender) VALUES
(11, 'Liam Johnson', 'liam.johnson@company.com', 'Engineering', 'Software Engineer', 85000, 'Male'),
(12, 'Olivia Smith', 'olivia.smith@company.com', 'Marketing', 'SEO Specialist', 62000, 'Female'),
(13, 'Noah Williams', 'noah.williams@company.com', 'Sales', 'Account Executive', 70000, 'Male'),
(14, 'Emma Brown', 'emma.brown@company.com', 'HR', 'HR Generalist', 58000, 'Female'),
(15, 'Oliver Jones', 'oliver.jones@company.com', 'Finance', 'Financial Analyst', 75000, 'Male'),
(16, 'Ava Garcia', 'ava.garcia@company.com', 'Engineering', 'QA Engineer', 68000, 'Female'),
(17, 'Elijah Miller', 'elijah.miller@company.com', 'Operations', 'Operations Manager', 90000, 'Male'),
(18, 'Sophia Davis', 'sophia.davis@company.com', 'Marketing', 'Content Writer', 55000, 'Female'),
(19, 'James Rodriguez', 'james.rodriguez@company.com', 'Sales', 'Sales Manager', 95000, 'Male'),
(20, 'Isabella Martinez', 'isabella.martinez@company.com', 'Finance', 'Payroll Specialist', 60000, 'Female');


select * from employees;

SELECT dept, COUNT(*) AS total_employees, AVG(salary) AS average_salary
FROM employees
GROUP BY dept
HAVING AVG(salary)>80000;


SELECT column(s)
FROM table_name
WHERE condition
GROUP BY column(s)
HAVING condition (aggregate)
ORDER BY column(s) ASC;

-- deleting employee from employees table
DELETE FROM employees
WHERE condition;

-- add a new column in employee table
ALTER TABLE employees
ADD COLUMN qualification VARCHAR(30);

-- delete a column
ALTER TABLE employees
DROP COLUMN qualification;

-- changing table name using this cmd
ALTER TABLE staffs
RENAME TO employees;

SELECT * FROM employees;

-- cahnging column name from old to new
ALTER TABLE employees
CHANGE COLUMN email gmail_id VARCHAR(50);

-- to delete all the data from that table (table khali kar deta hai truncate cmd)
TRUNCATE TABLE employees;



```