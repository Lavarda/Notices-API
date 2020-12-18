const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');

dotenv.config();
 
const routesNotices = require('./routes/notices')
const routesCategories = require('./routes/categories')

require('./database/connection')
require('events').EventEmitter.defaultMaxListeners = 5000;

const PORT = 3333
const HOST = '0.0.0.0'

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routesNotices)
app.use(routesCategories)

app.listen(process.env.PORT || PORT, HOST)