const crypto = require('crypto')
const User = require('../models/User')
const { sign } = require('jsonwebtoken')
const { createJSONToken } = require('../util/auth')

module.exports = {
    signup: function(request, response) {
        const body = request.body

        User.create({
            email: body.email,
            password: body.password
        })
        .then((user) => {
            let email = user.email
            let userId = user.id
            return response.status(200).json({
                user: user.id,
                token: createJSONToken(email, userId)
            })
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    },
    signin: function(request, response) {
        const body = request.body

        User.findOne({
            where: {
                email: body.email
            }
        })
        .then((user) => {
            console.log(user)
            let pass = user.password
            let email = user.email
            let userId = user.id
            if (pass === body.password) {
                return response.status(200).json({
                    user: user.id,
                    token: createJSONToken(email, userId)
                })
            } else {
                throw new Error("ya f'd up")
            }
        })
        .catch((err) => {
            return response.status(500).json({
                error: err
            })
        })
    }
}