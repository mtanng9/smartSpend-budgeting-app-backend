const express = require('express');
const router = express.Router();

router.get("/", (request, response) => {
    response.json({user: 1000})
})

router.post("/", (request, response) => {
    response.json({user: "created a new user"})
})

router.put("/:id", (request, response) => {
    let msg = `updated user for: ${request.params.id}`
    response.json({user: msg})
})

router.delete("/:id", (request, response) => {
    let msg = `deleted user for: ${request.params.id}`
    response.json({user: msg})
})



module.exports = router;