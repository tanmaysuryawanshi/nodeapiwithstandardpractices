import { json } from "stream/consumers";
import prisma from "../config/db";
import { comparePasswords, createJWT, hashPassword } from "../utils/auth";
export const createNewUser=async(req,res,next)=>{
    try{
  const user=await prisma.user.create({
    data:{
        username:req.body.username,
        password:await hashPassword(req.body.password)
  }})  
  const token =createJWT(user)
  res.json({token})}
  catch(e){
e.type='input'
next(e)
  }
}

export const signin=async(req,res,next)=>{
  try{
    const user=await prisma.user.findUnique({
        where:{
            username:req.body.username
        }})
    const isValid=await comparePasswords(req.body.password,user.password)
if(!isValid){
    res.status(404)
    res.json({message:'nope'})
    return;
}
    const token =createJWT(user)
    res.json({token})}
    catch(e){
      e.type=='auth'
      next(e)
  }
  }