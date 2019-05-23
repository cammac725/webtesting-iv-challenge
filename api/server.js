const express = require('express');

const server = express();

server.use(express.json())

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'running' })
})

server.get('/courses', async (req, res) => {
  const list = await courses.getAll();
  res.status(200).json(list)
})

module.exports = server;