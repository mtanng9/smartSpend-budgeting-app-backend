const Expense = require("../models/Expense")

module.exports = {
    getAllExpenses: function(request, response) {
        Expense.findAll()
        .then((expenses) => {
            return response.status(200).json({
                expenses: expenses
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    },
    getExpenseById: function(request, response) {
        Expense.findAll({
            where: {
                id: request.params.id
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
            userId: body.userId,
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
            userId: body.userId,
            amount: body.amount,
            title: body.title,
        }, {
            where: {
                id: request.params.id
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
                id: request.params.id
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