const express = require('express');
const expenseRoutes = require('./routes/expense')
const incomeRoutes = require('./routes/income')
const userRoutes = require('./routes/user')


const PORT = process.env.PORT || 8080;

const app = express()
app.use(express.json())

app.use("/income", incomeRoutes);
//app.get("/expenses", expenseRoutes);
//app.get("/users", userRoutes);


app.listen(PORT, () => {
    console.log("Sever Listen on port: ", PORT);
})
