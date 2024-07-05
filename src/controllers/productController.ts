import prisma from "../config/db";
// get all
export const getAllProductsController = async (req,res,next)=>{
    try{
    const user= await prisma.user.findUnique({
        where:{
            id:req.user.id
        },
        include:{
            products:true
        }
    })
    res.json({data:user.products})}
    catch(e){
        next(e)
    }
}

// get one
export const getOneProductController=async(req,res,next)=>{
    try{
    const id=req.params.id
    const product=await prisma.product.findUnique({
        where:{
            id,belongsToId:req.user.id
        }
    })

    res.json({data:product})}
    catch(e){
        next(e)
    }

}

export const createProductController=async (req,res,next)=>{
    try{
    const product =await prisma.product.create({
        data:{
            name:req.body.name,
            belongsToId:req.user.id
        }
    })
    res.json({data:product})}
    catch(e){
        next(e)
    }
}

export const updateProductController= async (req,res,next)=>{
    try{
    const updated=await prisma.product.update({
        where:{
            id:req.params.id
        },
        data:{
            name:req.body.name
        }
    })
    res.json({data:updated})}
    catch(e){
        next(e)
    }
}
export const deleteProductController=async (req,res,next)=>{
    try{
    const deleteProduct=await prisma.product.delete({
        where:{
            id:req.params.id,
            belongsToId:req.user.id  //only i can delete mine
        }
    })

    res.json({data:deleteProduct})}
    catch(e){
        next(e)
    }
    
}

