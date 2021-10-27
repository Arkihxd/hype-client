const Predio = require('../models/Predio');

module.exports = {
    async index(req, res){
        
    },

    async show(req, res){
        const { predio_id } = req.params;

        
    },
    
    async delete(req, res){
        const { predio_id } = req.params;

        
    },

    async store(req, res){
        const { nome, sigla, endereco, cidade, estado } = 
        req.body;

       
    }
};