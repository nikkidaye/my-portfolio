const express = require('express');

const app = express();

app.listen(PORT, () => {
  console.log(`Example app listening on ${PORT}!`);
});

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/portfolio.html');
});

const PORT = process.env.PORT || 5000;
