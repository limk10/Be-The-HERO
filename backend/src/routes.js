const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, paginação)
 * Route Params: Parametros ultilizados para identificar recurso (/:id)
 * Request Body: Corpo de requisição, ultilizado para criar ou alterar recursos
 */

// Query Params
// const params = request.query

// Route Params
// const params = request.params

// Request Body
// const body = request.body

routes.post('/sessions', SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;