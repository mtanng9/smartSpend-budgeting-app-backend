const express = require('express');
const ExpenseController = require('../controllers/ExpenseController');
const router = express.Router();

router.get("/", ExpenseController.getExpensesByUserId)

router.get("/:id", ExpenseController.getExpenseById)

router.post("/", ExpenseController.createExpense)

router.put("/:id", ExpenseController.updatedExpenseById)

router.delete("/:id", ExpenseController.deleteExpenseById)



module.exports = router;