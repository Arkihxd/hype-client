const { Model, DataTypes } = require('sequelize');

class Apartamento extends Model{
    static init (sequelize){
        super.init({
            codigo: DataTypes.STRING,
            quartos: DataTypes.INTEGER,
            banheiros: DataTypes.INTEGER,
            suites: DataTypes.INTEGER,
            area: DataTypes.FLOAT,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Predio, { foreignKey: 'predio_id', as:'Predio' });
    }
}

module.exports = Apartamento;