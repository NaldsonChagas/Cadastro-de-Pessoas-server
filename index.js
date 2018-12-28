const express = require('express');
const bodyParser = require('body-parser');
const person = require('./routes/person');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/person', person);

app.listen(3000, 'localhost', () => {
  console.log(`It's Works`);
});