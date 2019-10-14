const bcrypt = require("bcryptjs");

async function getUser(req, res) {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  }
}

async function register(req, res) {
  const { username, password } = req.body;
  const db = req.app.get("db");

  const foundUser = await db.auth.checkForUsername(username);

  if (foundUser[0]) {
    res.status(200).json("Username is taken.");
  } else {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    const newUser = await db.auth.registerUser(username, hash);

    req.session.user = {
      user_id: newUser[0].user_id,
      username: newUser[0].username
    };

    res.status(200).json(req.session.user);
  }
}

async function login(req, res) {
  const { username, password } = req.body;
  const db = req.app.get("db");

  const foundUser = await db.auth.checkForUsername([username]);

  if (!foundUser[0]) {
    res.status(400).json("No user found.");
  } else {
    const isAuthenticated = bcrypt.compareSync(password, foundUser[0].hash);
    if (!isAuthenticated) {
      res.status(400).json("Username and/or password is incorrect.");
    } else {
      req.session.user = {
        user_id: foundUser[0].user_id,
        username: foundUser[0].username
      };
      res.status(200).json(req.session.user);
    }
  }
}

async function logout(req, res) {
  req.session.destroy();
  res.sendStatus(200);
}

module.exports = {
  getUser,
  login,
  register,
  logout
};
