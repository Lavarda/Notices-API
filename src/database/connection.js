const { Sequelize } = require('sequelize');

const fs = require('fs')
const path = require('path');
const basename = path.basename(__filename);

const databaseConfig = require('./config/config.js')
const db = {}

const connection = new Sequelize(databaseConfig);
// const modelsDirectory = path.resolve(__dirname, '../', 'models')

// fs
//   .readdirSync(modelsDirectory)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(modelsDirectory, file));
//     model.init(connection)
//     connection[model.name] = model;
//   });

// Object.keys(connection).forEach(modelName => {
//   if (connection[modelName].associate) {
//     connection[modelName].associate(connection);
//   }
// });

// db.sequelize = connection;
// db.Sequelize = Sequelize;

module.exports = connection