const User = require('../db/model/user.model');
const sendEmailCustom = require('../helper/email.helper');
const bcrypt = require('bcryptjs');

class UserController{


    static allUser = async(req,res)=>{

        try{

            // Select Admin Or Select User
            // let allUsers = await User.find({isAdmin:0})
            let allUsers = await User.find()
            if(!allUsers) res.status(404).send({apiStatus:false,data:"",message: "Nout Found Data"})
            res.status(200).send({apiStatus:true,data:allUsers,message:"All Data"})
        }
        catch(e){

            res.status(500).send({apiStatus:false,data:"",message: "No Data"})
        }
    }
    static register =  async(req,res)=>{
    
        let user = new User(req.body)
        try{
            
            await user.save()
            sendEmailCustom(user.email,"Api Gym" , "Second Api")
            res.status(200).send({
                apiStatus:true,
                message: "Register Success",
                data:user,
            })
        }
        catch(e){
    
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message: "Regigster Error"
            })
        }
    }

    static activate = async(req,res)=>{

        let userId = req.params.id

        try{
            let user  = await User.findById(userId)
            if(!user) res.status(404).send({apiStatus:false,message:'User Not Found',data:""})
            user.status=true
            await user.save()
            res.status(200).send({apiStatus:true,message: "Activate Success",data:user,})
        }
        catch(e){
    
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message: "Activate User Error"
            })
        }

    }

    static login = async(req,res)=>{
        
        try{

            const userData = await User.loginUser(req.body.email, req.body.password)
            const token = await userData.generateToken()
            res.status(200).send({apiStatus:true, data:{userData,token},message:'Login In'})
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"Error Data"
            })
        }
    }

    static profile = async(req,res)=>{

     try{   res.status(200).send({ apiStatus:true, data:req.user, message:"Your Profile"})
    }
    catch(e){
        res.status(500).send({apiStatus:false,data:e.message,message:"Faild Data"})
    }
    }

    static logoutAll = async(req, res)=>{
        try{
            req.user.tokens=[]
            await req.user.save()
            res.send({
                apiStatus:true,
                data:"",
                message:"user logged out all"
            })
        }
        catch(e){
            res.send(e)
        }
    }

    static logout = async(req,res)=>{
      
            req.user.tokens.splice(req.token,1)
            await req.user.save()
      
            res.send({
                apiStatus:true,
                data:"",
                message:"user logged out"
            })
        
    }
    
}


module.exports = UserController