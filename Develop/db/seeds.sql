use employees;

INSERT INTO department
    (name)
VALUES
    ('Marketing'),
    ('Accounting'),
    ('Human Resources'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES  
    ('Marketing Director', 110000, 1),
    ('Marketing Representative', 80000, 1),
    ('Account Manager', 90000, 2),
    ('Accounting Personal', 70000, 2),
    ('HR Manager', 80000, 3),
    ('HR Representative', 70000, 3),
    ('Legal Team Manager', 130000, 4),
    ('Lawyer', 110000, 4);

INSERT INTO employee
    (first_name, last_name, manager_id, role_id)
VALUES
    ('Thomas', 'Anderson', 1, 1),
    ('Agent', 'Smith', 2, 3),
    ('Morpheus', 'Pill', 3, 5),
    ('Trinity', 'Anderson', 4, 7),
    ('Oracle', 'Lady', NULL, 2),
    ('Tank', 'Homegrown', NULL, 4),
    ('Key', 'Maker', NULL, 6), 
    ('Cypher', 'Snitch', NULL, 8);