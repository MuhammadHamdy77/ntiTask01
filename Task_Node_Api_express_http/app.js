

// http
const http = require('https');
//build modules
const path = require('path')

//installed package
const express = require('express')
const hbs = require('hbs')

//define port
const PORT = 3000

// create instance for express
const app = express()


// بقوله ان انا هشتغل بال view engin وهيقرا ال hbs
app.set('view engine' , 'hbs')

// مسار فولدر ال public
const staticFile = path.join(__dirname , 'public')

// مسار فولدر ال views
const viewFile =  path.join(__dirname , '/design/views')

//مسار فولدر ال layouts
const layoutFile =  path.join(__dirname , '/design/layouts')

// كده قولتله استخدملى المسار دا فى التطبيق
app.use(express.static(staticFile))
// قولتله يقرا ملفات hbs من المسار دا
app.set('views',viewFile)
/*
قولتله يستخدم البارتشيالز من المسار دا
البارتشيالز ان هو يقرا ملفات ال هيدر والفوتير 
*/
hbs.registerPartials(layoutFile)



//Route
app.get('',(req,res)=>{
    
    res.render('about',{pageTitle:"Home"})
})


const getMoview = (url,cb)=>{

  
    let req = http.request(url,(res)=>{

        let data=""
        
        res.on('data',(result)=>{
            data+=result.toString()
        })

        res.on('end' ,()=>{

            data = JSON.parse(data)
            data = data.results
            console.log(data);
            cb(data)
        })
    })


    req.on('error',(err)=>{
        console.log(err.message);
    })
    req.end()
}
app.get('/movies',(req,res)=>{

 
    getMoview("https://api.themoviedb.org/3/trending/all/day?api_key=48a641f4f76d7c9d5c11600f517a91fa" ,(movies)=>{
    res.render('movie' , {
        pageTitle:"Movies",
        movies,
    })
    })


})



app.get('/news',(req,res)=>{


    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
let result=""
 const reqq = http.request(apiUrl , (respo)=>{

    
    
    respo.on('data' , (data)=>{
        
        result+=data.toString()

    })

    respo.on('end' , ()=>{

        console.log()
        res.render('news',
        {
            pageTitle:"News",
            data: JSON.parse(result)
        
        })
    })

})

reqq.on('error' , (err)=>{
    console.log(err);
})
reqq.end();



})


app.get('*',(req,res)=>{

    res.render('404',{pageTitle:" 404 Not Found"})
})

app.listen(PORT , ()=>{
    console.log(`Now Your Run Project In Port ${PORT}`)
})