const Predio = require('../models/Predio');

module.exports = {
    async index(req, res){
        try{
            const predios = await Predio.findAll();

            return res.json(predios);
        }catch(err){
            res.status(500).json(err);
        }
    },

    async show(req, res){
        const { predio_id } = req.params;

        try{
            const predio = await Predio.findByPk(predio_id);

            if(!predio){
                return res.status(400).json({ error: 'Predio não existe' });
            }

            return res.json(predio);
        }catch(err){
            res.status(500).json(err);
        }
    },
    
    async delete(req, res){
        const { predio_id } = req.params;

        try{
            const predio = await Predio.findByPk(predio_id);

            if(!predio){
                return res.status(400).json({ error: 'Predio não existe' });
            }

            await Predio.destroy({
                where: {id: predio_id}
            });
            return res.json();
        }catch(err){
            res.status(500).json(err);
        }
    },

    async store(req, res){
        const { nome, sigla, endereco, cidade, estado } = 
        req.body;

        try{
            const predio = await Predio.create({ nome, sigla, endereco, cidade, estado });

            if(!predio){
                return res.status(400).json({ error: 'Predio não existe' });
            }
            return res.json(predio);
        }catch(err){
            res.status(500).json(err);
        }
    }
};