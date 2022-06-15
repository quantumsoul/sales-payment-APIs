const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        trim:true
    },
    password:{
        type: String,
        required:true,
        trim:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})
userSchema.methods.generateAuthToken = async function (){
    const user = this
    const token = jwt.sign({username:user.username,password:user.password},process.env.JWT_SECRET)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
const User = mongoose.model('User',userSchema)
module.exports = User