INSERT INTO helo_user (username, hash)
VALUES ($1, $2)
RETURNING *;