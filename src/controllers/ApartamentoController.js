const Predio = require('../models/Predio');
const Apartamento = require('../models/Apartamento');

module.exports = {
    async index(req, res){
        
    },

    async showByPredios(req, res){
        const { predio_id } = req.params;

        
    },

    async show(req, res){
        const { apartamento_id } = req.params;

    
    },

    async delete(req, res){
        const { apartamento_id } = req.params;

       
    },

    async store(req, res){
        const { predio_id } = req.params;
        const {codigo, quartos, banheiros, suites, area} = req.body;

        
    }
};