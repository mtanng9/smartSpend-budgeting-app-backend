const Income = require("../models/Income");

module.exports = {
    getAllIncomes: function(request, response) {
        Income.findAll()
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
    getIncomeById: function(request, response) {
        Income.findAll({
            where: {
                id: request.params.id
            }
        })
        .then((income) => {
            return response.status(200).json({
                income: income
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
            userId: body.userId,
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
            userId: body.userId,
            amount: body.amount,
            title: body.title,
        }, {
            where: {
                id: request.params.id
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
                id: request.params.id
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