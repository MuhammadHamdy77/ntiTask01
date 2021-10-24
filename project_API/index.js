const app = require('./src/app');
const PORT = process.env.PORT



app.get('/',(req,res)=>{
    res.send("Now Run")
})

app.listen(PORT,()=>console.log(`Now Your Run Server ${PORT} `))