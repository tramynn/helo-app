INSERT INTO user (username, hash)
VALUES ($1, $2)
RETURNING *;