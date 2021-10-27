const express = require('express');
const routes = express.Router();

routes.put('/predios/teste', (req, res) => {
    return res.json({response: "Teste de rota predios"});
});
routes.delete('/predios/teste', (req, res) => {
    return res.json({response: "Teste de rota predios"});
});
routes.get('/predios/teste', (req, res) => {
    return res.json({response: "Teste de rota predios"});
});
routes.get('/predios/teste', (req, res) => {
    return res.json({response: "Teste de rota predios"});
});


routes.put('/predios/teste', (req, res) => {
    return res.json({response: "Teste de rota predios"});
});
routes.delete('/predios/teste', (req, res) => {
    return res.json({response: "Teste de rota predios"});
});
routes.get('/predios/teste', (req, res) => {
    return res.json({response: "Teste de rota predios"});
});
routes.get('/predios/teste', (req, res) => {
    return res.json({response: "Teste de rota predios"});
});
routes.get('/predios/teste', (req, res) => {
    return res.json({response: "Teste de rota predios"});
});

module.exports = routes;