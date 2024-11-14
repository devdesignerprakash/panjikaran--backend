const express = require('express')
const app= express()
const dotenv=require('dotenv')
dotenv.config()
const dbconnection= require('../src/database/dbConnection')
app.use(express.json())
const companyRoutes= require('./routes/CompanyRoutes')

app.use('/',companyRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`app is running on port ${process.env.PORT}`)
})