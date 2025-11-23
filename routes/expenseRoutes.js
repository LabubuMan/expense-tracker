const express = require("express");
const router = express.Router();
const controller = require("../controllers/expenseController");

router.get("/", controller.getExpenses);
router.get("/create", controller.createForm);
router.post("/create", controller.createExpense);

router.get("/edit/:id", controller.editForm);
router.post("/edit/:id", controller.updateExpense);

router.get("/delete/:id", controller.deleteForm);
router.post("/delete/:id", controller.deleteExpense);

module.exports = router;
