//importing stuff
const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
const errorMiddleware = require('./middleware/error');

//expresss initialize
const app = express();

//dotenv file path config
dotenv.config({path:"./config/config.env"});

//database connection
connectDatabase();

//for json parsing
app.use(express.json());

//importing routes
const customerRoutes = require('./routes/customerRoute')
const orderRoutes = require('./routes/orderRoute')

//using the routes
app.use("/api",customerRoutes)
app.use("/api",orderRoutes)

//error handling middleware
app.use(errorMiddleware)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})