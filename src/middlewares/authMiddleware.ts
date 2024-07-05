
import jwt from 'jsonwebtoken'
export const protect=(req,res,next)=>{
    const bearer=req.headers.authorization
    if(!bearer){
        res.status(401)
        res.json({message:"not authorized"})
        return
    }
    const [, token] = bearer.split(" ");
  if (!token) {
    console.log("here");
    res.status(401);
    res.send("Not authorized");
    return;
  }
try{
    const user=jwt.verify(token,process.env.JWT_SECRET)
    req.user=user;
next()
}
catch(e){
console.error(e)
res.status(e)
res.json(401)
res.json({message:'not a valid token'})
return
}

}