const sequelize = require('../db');
const {DataTypes} = require('sequelize');


const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncremet: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    type: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
});


const FeedBack = sequelize.define ('feedBack', {
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    telephone: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
});


module.exports = {
    Product,
    FeedBack
};