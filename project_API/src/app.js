
require("dotenv").config();

require('../db/conecction')

const express = require('express');

const app  = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes file
const adminRoutes = require('../routes/admin.routes')
const ordersRoutes = require('../routes/order.routes')
const userRoutes = require('../routes/user.routes')
const prodRoutes = require('../routes/product.routes')

const cors = require('cors')
app.use(cors())
app.use('/admin',adminRoutes)
app.use('/order',ordersRoutes)
app.use('/user',userRoutes)
app.use('/product',prodRoutes)

module.exports = app