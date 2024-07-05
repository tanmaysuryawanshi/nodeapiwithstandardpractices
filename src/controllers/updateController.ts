import { connect } from "http2";
import prisma from "../config/db";
// get all
export const getAllUpdatesController = async (req,res)=>{

    const products=await prisma.product.findMany({
        where:{
            belongsToId:req.user.id
        },
        include:{
            updates:true
        }
    })
 const updates=products.reduce((allUpdates,product)=>{
    return [...allUpdates,...product.updates]
 },[])
    res.json({data:updates})
}

// get one
export const getOneUpdateController=async(req,res)=>{
    const id=req.params.id
    const update=await prisma.product.findUnique({
        where:{
            id:id,belongsToId:req.product.productId
        }
    })

    res.json({data:update})

}

export const createUpdateController=async (req,res)=>{
   
    const product =await prisma.product.findUnique({
       where:{
        id:req.body.productId,

       }
    })

    if(!product){
        return res.json({message:'nope'})
    }
    const update=await prisma.update.create({
        data:{title:req.body.title,
            body:req.body.body,
            product:{connect:{id:product.id}}
        }
    })

    res.json({data:update})
}

export const updateUpdatesController= async (req,res)=>{
    const products=await prisma.product.findMany({
        where:{
            belongsToId:req.user.id,
        },
        include:{updates:true}
        
    })
    const updates=products.reduce((allUpdates,product)=>{
        return [...allUpdates,...product.updates]
     },[])
     const match=updates.find(update=>update.id===req.params.id)
     if(!match){
    res.json({message:'nope'})}
    const updatedUpdate=await prisma.update.update({
        where:{
            id:req.params.id
        },
        data:req.body
    })
    
}
export const deleteUpdateController=async (req,res)=>{
    const products=await prisma.product.findMany({
        where:{
            belongsToId:req.user.id,
        },
        include:{updates:true}
        
    })
    const updates=products.reduce((allUpdates,product)=>{
        return [...allUpdates,...product.updates]
     },[])
     const match=updates.find(update=>update.id===req.params.id)
     if(!match){
    res.json({message:'nope'})}

    const deletedUpdate=await prisma.update.delete({
        where:{
            id:req.params.id
        }
    })
    res.json({data:deletedUpdate})
}