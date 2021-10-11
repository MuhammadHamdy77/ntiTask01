const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express()
const userRoutes = require('../routes/userRoutes')
app.set('view engine' ,'hbs')
app.set('views' , path.join(__dirname,'../frontend/views'))

app.use(express.static(path.join(__dirname , '../public')))
hbs.registerPartials(path.join(__dirname,'../frontend/layouts'))



app.use(express.urlencoded({ extended: true }));
app.use(userRoutes)
app.get('*' , (req,res)=>{
    
    res.render('404error',{pageTile:"404error"})
})
module.exports = app