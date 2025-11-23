const Expense = require("../models/Expense");

// SHOW all expenses
exports.getExpenses = async (req, res) => {
    const expenses = await Expense.find().sort({ date: -1 });
    res.render("expenses", { expenses });
};

// SHOW create form
exports.createForm = (req, res) => {
    res.render("create");
};

// CREATE new expense
exports.createExpense = async (req, res) => {
    await Expense.create(req.body);
    res.redirect("/expenses");
};

// SHOW edit form
exports.editForm = async (req, res) => {
    const expense = await Expense.findById(req.params.id);
    res.render("edit", { expense });
};

// UPDATE expense
exports.updateExpense = async (req, res) => {
    await Expense.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/expenses");
};

// DELETE confirm page
exports.deleteForm = async (req, res) => {
    const expense = await Expense.findById(req.params.id);
    res.render("delete", { expense });
};

// DELETE expense
exports.deleteExpense = async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.redirect("/expenses");
};
