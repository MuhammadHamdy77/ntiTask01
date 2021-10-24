const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")

const userSchemaa = new mongoose.Schema({
  name: {
       type: String, 
       trim: true, 
       minlength: 6, 
       maxlength: 20 
    },
  email: { 
      type: String, 
    trim: true, 
    required: true, 
    unique: true,
    validate(val){
        if(!validator.isEmail(val))throw new Error("invalid Email")
    } 
},
  password: { 

      type: String, 
      trim: true ,
      required: true,
      minlength:6,
      maxlength:100,
    },
//   confirmpassword: { 
//       type: String, 
//       trim: true ,
//       required: true,
//       minlength:6,
//       maxlength:20,
//     },
    gender:{
        
        type:String,
        trim:true,
        enum:["male","female"]
    },
    age:{
        type:Number,
        trim:true,
        min:21
    },
    status:{
        type:Boolean,
        default:false
    },
    tokens:[{token:{type:String,required:true}}],
    isAdmin:{
        type:Number,
        default:0,
    }
},{timestamps:true});


userSchemaa.virtual('myOrders', {
    ref:"order",
    localField:"_id",
    foreignField:"user"
})

userSchemaa.methods.toJSON = function(){
    const data = this.toObject()
    delete data.password
    delete data.__v
    delete data.tokens
    return data
}


userSchemaa.pre('save' , async function(){

    let user  = this
   if(user.isModified("password")) user.password = await bcrypt.hash(user.password,12)

})

userSchemaa.statics.loginUser = async(email,password)=>{
    const user = await User.findOne({email})
    if(!user) throw new Error("Invalid Email")
    const isValid = await bcrypt.compare(password,user.password)
    if(!isValid) throw new Error("Invalid Password")
    return user
}

userSchemaa.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWTTOKEN)
    // user.tokens.push({token})
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

const User = mongoose.model("user", userSchemaa);
module.exports = User;
