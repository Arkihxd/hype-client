const Predio = require('../models/Predio');
const Apartamento = require('../models/Apartamento');

module.exports = {
    async index(req, res){
        try{
            const apartamentos = await Apartamento.findAll({
                include: 'Predio'
            });
            return res.json(apartamentos);
        }catch(err){
            res.status(500).json(err);
        }
    },

    async show(req, res){
        const { apartamento_id } = req.params;

        try{
            const apartamento = await Apartamento.findByPk(apartamento_id);

            if(!apartamento){
                return res.status(400).json({ error:'Apartamento não existe' });
            }

            return res.json(apartamento);
        }catch(err){
            res.status(500).json(err);
        }
    },

    async delete(req, res){
        const { apartamento_id } = req.params;

        try{
            const apartamento = await Apartamento.findByPk(apartamento_id);

            if(!apartamento){
                return res.status(400).json({ error: 'Apartamento não existe' });
            }
    
            await Apartamento.destroy({
                where: {id: apartamento_id}
            });
            return res.json();
        }catch(err){
            res.status(500).json(err);
        }
    },

    async store(req, res){
        const { predio_id } = req.params;
        const {codigo, quartos, banheiros, suites, area} = req.body;

        try{
            const predio = await Predio.findByPk(predio_id);

            if(!predio){
                return res.status(400).json({ error: 'Predio não existe' });
            }

            const apartamento = await Apartamento.create({
                codigo,
                quartos,
                banheiros,
                suites,
                area,
                predio_id,
            });
            return res.json(apartamento);

        }catch(err){
            res.status(500).json(err);
        }
    }
};