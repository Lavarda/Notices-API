const express = require('express');
const bodyParser = require('body-parser')
 
const routesNotices = require('./routes/notices')
const routesLogin = require('./routes/login')

require('./database/connection')
require('events').EventEmitter.defaultMaxListeners = 5000;

const PORT = 3333
const HOST = '0.0.0.0'

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routesNotices)
app.use(routesLogin)

app.listen(PORT, HOST)