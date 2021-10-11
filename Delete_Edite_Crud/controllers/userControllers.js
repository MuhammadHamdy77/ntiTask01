const fs = require('fs');

// read data from file

readData = ()=>{
    let data;
    try{
     data = JSON.parse(fs.readFileSync('model/data.json'));
     if(!Array.isArray(data)) throw new Error('Not Array')
     return data
    }
    catch(error){
        data = []
        return data
    }
}

// write data from file

writeData = (allUsers) => {
    try{

        fs.writeFileSync('model/data.json', JSON.stringify(allUsers))
    }
    catch(error){

        console.log(`Data Not Add ${error}`);
    }
}



class userControllers{


    static goAll = (req,res) =>{
        res.redirect('all')
    }
    static showAll = (req,res) =>{
        let allUsers = readData()
        let data={
            pageTile: 'All Users',
            allUsers,
            userStatus : allUsers.length >0? true:false
        }
        // res.send(data)
        res.render('all',data)
    }

    static singleUser = (req,res) =>{
       let data={ user:false , pageTile: 'Single Users' }

       let id = req.params.id
       let allUsers =readData()
       // كده انا بعمل سيرش على الاي دي اللى معايا بطلعه من الفايل بتاع الداتا الانا بقرا منه
       let user = allUsers.find(el=> el.id == id)

       if( user ) data.user = user
        res.render('single',data)
    }

    static add = (req,res) =>{
        let data={pageTile: 'Add New Users'}

        if(req.query.userName){
            let user={ id: Date.now(),name: req.query.userName,age: req.query.age}
            let allUsers = readData()
            allUsers.push(user)
            writeData(allUsers)
            res.redirect('/all')
        }else{
            res.render('add',data)
        }
    }


    static addPost = (req,res)=>{
        let data={pageTile: 'Add New Users(POST)'}
        res.render('addPost',data)
    }

    static setData = (req , res)=>{
        let user={ id: Date.now(),name: req.body.userName,age: req.body.age}
        let allUsers = readData()
        allUsers.push(user)
        writeData(allUsers)
        res.redirect('/all')
    }

    static edit = (req,res) =>{

        let data={ user:false , pageTile: 'Edit Users' }

        let id = req.params.id
        let allUsers =readData()
        // كده انا بعمل سيرش على الاي دي اللى معايا بطلعه من الفايل بتاع الداتا الانا بقرا منه
        let user = allUsers.find(el=> el.id == id)
 
        if( user ) data.user = user
        res.render('edit',data)
    }

    static updateUser = (req,res) => {
        let allUser = readData()
        let id = req.params.id
        let userIndex  = allUser.findIndex(el=> el.id == id)
        allUser[userIndex].name= req.body.userName
        allUser[userIndex].age= req.body.age
        writeData(allUser)
        res.redirect('/')
    }


    static del = (req,res) =>{
        let allUser = readData()
        let id= req.params.id
        let userIndex = allUser.findIndex(ele=>{return ele.id==id })
        if(userIndex==-1) res.render('err404', {
            pageTitle:"User Not Found",
            err: `No user With id ${req.params.id}`
        })
        else{
            allUser.splice(userIndex,1)
            writeData(allUser)
            res.redirect('/')    
        }
    }



}

module.exports = userControllers