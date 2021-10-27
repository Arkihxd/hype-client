const { Model, DataTypes } = require('sequelize');

class Predio extends Model{
    static init (sequelize){
        super.init({
            nome: DataTypes.STRING,
            sigla: DataTypes.STRING,
            endereco: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Apartamento, { foreignKey: 'predio_id', as: 'apartamentos' });
    }
}

module.exports = Predio;