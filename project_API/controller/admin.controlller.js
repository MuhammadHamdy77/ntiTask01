const Admin = require('../db/model/admin.model');
const User = require('../db/model/user.model')

class AdminController{

    
    static setAdmin = async(req,res)=>{

        let userId = req.params.id

        try{
            let user  = await User.findById(userId)
            if(!user) res.status(404).send({apiStatus:false,message:'User Not Found',data:""})
            user.isAdmin=1
            await user.save()
            res.status(200).send({
                apiStatus:true,
                message: "Add Adnin Success",
                data:user,
            })
        }
        catch(e){
    
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message: "Add Admin Faild"
            })
        }

    }
}


module.exports = AdminController