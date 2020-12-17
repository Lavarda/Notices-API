const express = require('express')
const routes = express.Router();

const NoticesController = require('../controllers/NoticesController')

routes.post('/notices/create', NoticesController.create)
routes.post('/notices/find/:id', NoticesController.findNotice)

routes.get('/notices/list', NoticesController.list)

routes.delete('/notices/delete/:id', NoticesController.delete)

module.exports = routes