const express = require("express");
const app = express();
const connectDB = require("./config/db");
const expenseRoutes = require("./routes/expenseRoutes");
const methodOverride = require("method-override");

require("dotenv").config();
connectDB();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

// all expense routes
app.use("/expenses", expenseRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
