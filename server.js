const express = require('express');
const server = express();
const helmet = require("helmet");
const logger = require("morgan");

const actionRouter = require("./data/helpers/actionRouter.js");
const projectRouter = require("./data/helpers/projectRouter.js");


server.use(express.json());
server.use(helmet());
server.use(logger("dev"));

server.use('/projects',projectRouter);
server.use('/actions', actionRouter);

server.get('/',(req, res) => {
  res.send(" Message from inside server.js")
});

module.exports = server
