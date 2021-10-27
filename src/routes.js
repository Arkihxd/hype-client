const express = require('express');
const routes = express.Router();

routes.get('/predios/teste', (req, res) => {
    return res.json({response: "Teste de rota predios"});
});

routes.get('/apartamentos/teste', (req, res) => {
    return res.json({response: "Teste de rota apartamentos"});
})


module.exports = routes;