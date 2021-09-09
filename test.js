const dotenv = require("dotenv");
dotenv.config();
const sequelize = require('./app/database');

const { Tag } = require('./app/models');

// sequelize.authenticate().then(() => {
// console.log('Connection has been established successfully.');
// }).catch((error) => {
// console.error('Unable to connect to the database:', error);
// });

Tag.findAll().then((tags) => {
    console.log(tags);
});