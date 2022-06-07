const jwt = require('jsonwebtoken')
const User = require('../models/usermodel')
const auth = async (req,res,next)=>{
    try {
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            throw new Error()
        }
    } catch (error) {
        res.status(401).send()
    }
    console.log("decoded")
    next()
}
module.exports = auth