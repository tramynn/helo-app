require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();

// Dotenv
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

// Controllers
const authController = require("./controllers/authController");

const { getUser, register, login, logout } = authController;

// Middleware
app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is connected!");
});

// Auth endpoints
app.get("/auth/user", getUser);
app.post("/auth/register", register);
app.post("/auth/login", login);
app.post("/auth/logout", logout);

// Post endpoints

app.listen(SERVER_PORT, () => {
  console.log(`SERVER LISTENING ON PORT: ${SERVER_PORT}`);
});
