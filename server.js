const express = require('express');
const server = express();
const helmet = require("helmet");
const logger = require("morgan");

server.use(express.json());
server.use(helmet());
server.use(logger("dev"));
server.use('/api/projects');


server.get('/', (req, res) => {
  res.send(`
    <h2>WEB API Sprint Challenge</h2>
  `);
});

module.exports = server
