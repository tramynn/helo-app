SELECT p.*, hu.username FROM posts p
INNER JOIN helo_user hu
ON p.user_id = hu.user_id
WHERE p.post_id = $1;