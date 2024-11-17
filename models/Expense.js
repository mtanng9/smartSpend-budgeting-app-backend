const { Sequelize, DataTypes, Model } = require("sequelize")
const sequelize = require("../storage/sqlite")

const Expense = sequelize.define(
    "Expense",
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

module.exports = Expense