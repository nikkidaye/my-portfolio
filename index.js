const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening on ${PORT}!`);
});

app.use(express.static(__dirname + '/Public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/Public/portfolio.html');
});
