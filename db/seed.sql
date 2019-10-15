-- Create user table
CREATE TABLE helo_user (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(40) NOT NULL,
  hash TEXT NOT NULL
);

-- Create posts table
CREATE TABLE posts (
post_id SERIAL NOT NULL,
title VARCHAR(100) NOT NULL,
img TEXT,
content VARCHAR(500) NOT NULL,
user_id INTEGER NOT NULL REFERENCES helo_user(user_id)
)

-- Add post
INSERT INTO posts
(user_id, title, img, content)
VALUES
($1, $2, $3, $4)

-- Dummy data
INSERT INTO posts
(user_id, title, img, content)
VALUES
(1, 'Today is a great day', 'https://i.pinimg.com/originals/f2/ce/c9/f2cec98f06e8f66ff0bcfb2ffdb413eb.jpg', 'Heres a pic of a cute happy cat')

-- Get all posts
SELECT p.*, hu.username FROM posts p
INNER JOIN helo_user hu
ON p.user_id = hu.user_id;