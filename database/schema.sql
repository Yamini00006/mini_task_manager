CREATE TABLE tasks (
    id INTEGER PRIMARY KEY,
    task_name VARCHAR(100) NOT NULL,
    description VARCHAR(500),
    completed BOOLEAN NOT NULL DEFAULT FALSE
);