'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Success !');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
