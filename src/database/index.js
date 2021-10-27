const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Predio = require('../models/Predio');
const Apartamento = require('../models/Apartamento');

const connection = new Sequelize(dbConfig);

Predio.init(connection);
Apartamento.init(connection);

Predio.associate(connection.models);
Apartamento.associate(connection.models);

module.exports = connection;