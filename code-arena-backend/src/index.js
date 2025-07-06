const express = require('express');

const {PORT} = './config/server.config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.length('/ping', (req, res) => {
  res.status(200).send('pong');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});