"use strict";

const User=require('../models/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


const userSignUp=async (req,res)=>{
const {email,password}=req.body
if(!email || !password)
    {
    return res.status(400).json({message:"Please email and password to sign up"})
    }
    let user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
    const hashPwd=await bcrypt.hash(password,10)
    const newUser=await User.create({
        email,password:hashPwd})
       let token=jwt.sign({email,id:newUser._id},process.env.SECRET_KEY)
       return res.status(200).json({token,newUser})
}

const userLogin=async (req,res)=>{
    const {email,password}=req.body
    if(!email || !password)
        {
        return res.status(400).json({message:"Please email and password to sign up"})
        }
        let user=await User.findOne({email})
        if(user && await bcrypt.compare(password,user.password)){
            let token=jwt.sign({email,id:newUser._id},process.env.SECRET_KEY)
       return res.status(200).json({token,newUser})

        }else{
            return res.status(400).json({error:"Invalid credentials"})
        }
}

const getUser=async (req,res)=>{
const user= await User.findById(req.params.id)
res.json({email:user.email})
}


module.exports={userSignUp,userLogin,getUser}