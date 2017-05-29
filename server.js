const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('*', (request, response) => {
  response.sendFile([ __dirname, 'public/index.html' ].join('/'));
});

app.listen(1337, () => {
  console.log('Server listening on 0.0.0.0:1337');
});
