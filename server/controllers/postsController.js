async function getAllPosts(req, res) {
  const db = app.req.get("db");
  const posts = await db.posts.getAllPosts();
  if (db) {
    res.status(200).json(posts);
  }
}

async function getPostsByTitle(req, res) {
  const db = app.req.get("db");
  const { title } = req.query;

  const posts = await db.posts.getPostsByTitle(`${title}%`);
  res.status(200).json(posts);
}

async function getPostById(req, res) {
  const db = app.req.get("db");
  const { post_id } = req.params;

  const post = await db.posts.getPostById([post_id]);
  res.status(200).json(post);
}

async function addPost(req, res) {
  const db = app.req.get("db");
  const { user_id } = req.session.user;
  const { title, img, content } = req.body;

  const post = await db.posts.addPost([user_id, title, img, content]);
  res.status(200).json(post);
}

module.exports = {
  getAllPosts,
  getPostsByTitle,
  getPostById,
  addPost
};
