const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
            if(!validator.isLength(value,{min:6, max:undefined})){
                throw new Error('Password too small!')
            }
        }
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})
userSchema.virtual('salesTransaction',{
    ref:'Salestransaction',
    localField:'_id',
    foreignField:'owner'
})
userSchema.virtual('paymentTransaction',{
    ref:'Paymenttransaction',
    localField:'_id',
    foreignField:'owner'
})
userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = jwt.sign({username:user.username, password:user.password},"internshiptask");
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token;
}
userSchema.statics.findByCredentials = async (email,password)=>{
    const user = await User.findOne({username})
    if(!user){
        throw new Error('User not found!')
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error('Unable to login!')
    }
    return user
}
const User = mongoose.model("User",userSchema);
module.exports = User;