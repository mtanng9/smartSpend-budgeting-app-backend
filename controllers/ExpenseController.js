const Expense = require("../models/Expense")

module.exports = {
    getExpensesByUserId: function(request, response) {
        Expense.findAll({
            where: {
                userId: request.token.userId
            }
        })
        .then((expense) => {
            return response.status(200).json({
                expense: expense
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    },
    getExpenseById: function(request, response) {
        Expense.findOne({
            where: {
                id: request.params.id,
                userId: request.token.userId
            }
        })
        .then((expense) => {
            return response.status(200).json({
                expense: expense
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    },
    createExpense: function(request, response) {
        const body = request.body
        Expense.create({
            userId: request.token.userId,
            amount: body.amount,
            title: body.title,
        })
        .then((expense) => {
            return response.status(200).json({
                id: expense.id
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    },
    updatedExpenseById: function(request, response) {
        const body = request.body
        Expense.update({
            amount: body.amount,
            title: body.title,
        }, {
            where: {
                id: request.params.id,
                userId: request.token.userId
            }
        })
        .then((expense) => {
            console.log(expense)
            return response.status(200).json({
                id: expense
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    },
    deleteExpenseById: function(request, response) {
        Expense.destroy({
            where: {
                id: request.params.id,
                userId: request.token.userId
            }
        })
        .then((expense) => {
            console.log(expense)
            return response.status(200).json({
                id: expense
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    }
}