const express = require('express');
const sequelize = require('./storage/sqlite')
const expenseRoutes = require('./routes/expense')
const incomeRoutes = require('./routes/income')
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth')
const Income = require('./models/Income');
const Expense = require('./models/Expense');
const User = require('./models/User');
const { checkAuth } = require('./util/auth');

const PORT = process.env.PORT || 8080;

function startExpressServer() {    
    const app = express()
    app.use(express.json())
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
        next();
      });
      
    
    app.use("/auth", authRoutes)
    app.use(checkAuth)
    app.use("/income", incomeRoutes);
    app.use("/expenses", expenseRoutes);
    app.use("/users", userRoutes);
    
    app.use((error, req, res, next) => {
        const status = error.status || 500;
        const message = error.message || 'Something went wrong.';
        res.status(status).json({ message: message });
    });

    app.listen(PORT, () => {
        console.log("Sever Listen on port: ", PORT);
    })
}

async function startDb() {
    try {
        await sequelize.authenticate();
        console.log("Connection to database has been established successfully")
    } catch (err) {
        console.error("Unable to connect to database: ", err)
    }
}

async function syncDB() {
    await Income.sync()
    console.log("Table for Income model was successfully created")

    await Expense.sync()
    console.log("Table for Expense model was successfully created")

    await User.sync()
    console.log("Table for User model was successfully created")
}

async function temp() {
    const newIncome = Income.build({userId: 123, amount: 1000, title: "temp income"})
    await newIncome.save();
    console.log("saved temp income")
}

startDb()
syncDB()
//temp()
startExpressServer()
