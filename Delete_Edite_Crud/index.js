require('dotenv').config()
const app = require('./src/app')

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Your Port ${port}`)
})

// فايل الانديكس دا فيه التشغيلات الاساسيه مش هاجي جنبه تاني 