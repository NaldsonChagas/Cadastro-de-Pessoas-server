const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const person = require('./routes/person');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin: '*'}));
app.use(expressValidator());

app.use('/person', person);

app.listen(3000, 'localhost', () => {
  console.log(`It's Works`);
});