const express = require('express');
const IncomeController = require('../controllers/IncomeController');
const router = express.Router();

router.get("/", IncomeController.getIncomesByUserId)

router.get("/:id", IncomeController.getIncomesByUserIdAndId)

router.post("/", IncomeController.createIncome)

router.put("/:id", IncomeController.updatedIncomeById)

router.delete("/:id", IncomeController.deleteIncomeById)



module.exports = router;