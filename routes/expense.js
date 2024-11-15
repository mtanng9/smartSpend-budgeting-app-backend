const express = require('express');
const router = express.Router();

router.get("/", (request, response) => {
    response.json({expense: 1000})
})

router.post("/", (request, response) => {
    response.json({expense: "created a new expense"})
})

router.put("/:id", (request, response) => {
    let msg = `updated expense for: ${request.params.id}`
    response.json({expense: msg})
})

router.delete("/:id", (request, response) => {
    let msg = `deleted expense for: ${request.params.id}`
    response.json({expense: msg})
})



module.exports = router;