const express = require('express');
const PredioController = require('./controllers/PredioController');
const ApartamentoController = require('./controllers/ApartamentoController');

const routes = express.Router();

routes.put('/predios/create', PredioController.store);
routes.delete('/predios/delete/:predio_id', PredioController.delete);
routes.get('/predios', PredioController.index);
routes.get('/predios/:predio_id', PredioController.show);

routes.put('/apartamentos/create/:predio_id', ApartamentoController.store);
routes.delete('/apartamentos/delete/:apartamento_id', ApartamentoController.delete);
routes.get('/apartamentos', ApartamentoController.index);
routes.get('/apartamentos/:apartamento_id', ApartamentoController.show);

module.exports = routes;