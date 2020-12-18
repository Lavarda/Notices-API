const express = require('express')
const routes = express.Router();

const CategoriesController = require('../controllers/CategoriesController')

routes.post('/categories/:notice_id/create', CategoriesController.create)

routes.get('/categories/list', CategoriesController.list)

routes.delete('/categories/delete/:id', CategoriesController.delete)

module.exports = routes