const { Sequelize, DataTypes, Model } = require("sequelize")
const sequelize = require("../storage/sqlite")

const Income = sequelize.define(
    "Income",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }
)

module.exports = Income