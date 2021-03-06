const jwt = require('jsonwebtoken')
const User = require('../models/user')
const auth = async (req,res,next)=>{
    try {
        const t = req.header('Authorization')
        var b = t.split(" ")
        if(b[0]!="Bearer"){
            throw new Error()
        }
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findOne({username:decoded.username,password:decoded.password,'tokens.token':token})
        if(!user){
            throw new Error()
        }
        req.token = token
        req.user = user
    } catch (error) {
        res.status(401).send({error:'Please authenticate'})
    }
    next()
}
module.exports = auth