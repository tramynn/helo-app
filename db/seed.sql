-- Create user table
CREATE TABLE helo_user (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(40) NOT NULL,
  hash TEXT NOT NULL
);

-- Create posts table