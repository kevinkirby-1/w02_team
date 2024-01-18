const routes = require('express').Router()
const w02TeamController = require('../controllers/w02_team')

routes.get('/professional', w02TeamController.getData);

module.exports = routes;