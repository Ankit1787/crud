const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const ErrorMiddleware = require('./middleware/Error');
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v2/',require('./Routes/bookroutes'))
app.use(ErrorMiddleware)
module.exports = app