const Income = require("../models/Income");

module.exports = {
    getIncomesByUserId: function(request, response) {
        Income.findAll({
            where: {
                userId: request.token.userId
            }
        })
        .then((incomes) => {
            return response.status(200).json({
                incomes: incomes
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    },
    getIncomesByUserIdAndId: function(request, response) {
        Income.findOne({
            where: {
                is: request.params.id,
                userId: request.token.userId
            }
        })
        .then((incomes) => {
            return response.status(200).json({
                incomes: incomes
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    },
    createIncome: function(request, response) {
        const body = request.body
        Income.create({
            userId: request.token.userId,
            amount: body.amount,
            title: body.title,
        })
        .then((income) => {
            return response.status(200).json({
                id: income.id
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    },
    updatedIncomeById: function(request, response) {
        const body = request.body
        Income.update({
            amount: body.amount,
            title: body.title,
        }, {
            where: {
                id: request.params.id,
                userId: request.token.userId
            }
        })
        .then((income) => {
            console.log(income)
            return response.status(200).json({
                id: income
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    },
    deleteIncomeById: function(request, response) {
        Income.destroy({
            where: {
                id: request.params.id,
                userId: request.token.userId
            }
        })
        .then((income) => {
            console.log(income)
            return response.status(200).json({
                id: income
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    }
}