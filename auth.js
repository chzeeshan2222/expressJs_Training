const auth=(req,res,next)=>{
    const {user}=req.query;
    console.log(user);
    if(user==='zeeshan'){
        console.log("user authorized");
        next();
    }
    else{
        console.log("user not authorized");
        res.status(401).send("user not authorized");
    }
}
module.exports = auth;