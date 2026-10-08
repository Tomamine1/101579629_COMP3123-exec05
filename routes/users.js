const express = require('express');
const routerUser = express.Router();

routerUser.get('/profile', (req, res) => {
  res.json(require('../user.json'));
});

routerUser.post('/login', (req, res) => {
  const user = require('../user.json');

  if (req.body.username !== user.username) {
    return res.json({
      status: false,
      message: "User Name is invalid"
    });
  }

  if (req.body.password !== user.password) {
    return res.json({
      status: false,
      message: "Password is invalid"
    });
  }

  res.json({
    status: true,
    message: "User Is valid"
  });
});

routerUser.get('/logout', (req, res) => {
  const username = req.query.username;
  res.send(`<b>${username} successfully logged out.<b>`);
});

module.exports = routerUser;