const express = require('express');
const router = express.Router();

router.get("/", (request, response) => {
    response.json({income: 1000})
})

router.post("/", (request, response) => {
    response.json({income: "created a new income"})
})

router.put("/:id", (request, response) => {
    let msg = `updated income for: ${request.params.id}`
    response.json({income: msg})
})

router.delete("/:id", (request, response) => {
    let msg = `deleted income for: ${request.params.id}`
    response.json({income: msg})
})



module.exports = router;