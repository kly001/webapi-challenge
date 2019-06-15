const express = require('express');
const helmet = require("helmet");
const logger = require("morgan");

const actionRouter = require("./actionRouter.js");
const projectRouter = require("./projectRouter.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger("dev"));

server.use('/api/projects',projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>WEB API Sprint Challenge</h2>
  `);
});

module.exports = server
