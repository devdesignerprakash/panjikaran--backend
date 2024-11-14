const express = require('express')
const app= express()
const dbconnection= require('../src/database/dbConnection')
app.use(express.json())
const companyRoutes= require('./routes/CompanyRoutes')

app.use('/',companyRoutes)

app.listen(4000,()=>{
    console.log("app is listening on port 4000")
})