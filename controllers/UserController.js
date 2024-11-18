const User = require("../models/User")

module.exports = {
    getUserById: function(request, response) {
        User.findOne({
            where: {
                id: request.token.userId
            }
        })
        .then((user) => {
            return response.status(200).json({
                user: user
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    },
    updateUser: function(request, response) {
        const body = request.body
        User.update({
            email: body.email,
            password: body.password
        }, {
            where: {
                id: request.token.userId
            }
        })
        .then((user) => {
            return response.status(200).json({
                user: user
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    },
    deleteUser: function(request, response) {
        Use.destroy({
            where: {
                id: request.token.userId
            }
        })
        .then((user) => {
            return response.status(200).json({
                user: user
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    }
}