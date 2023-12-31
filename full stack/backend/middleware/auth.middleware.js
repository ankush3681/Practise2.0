const jwt = require("jsonwebtoken");

const auth = (req,res,next)=>{
   const token = req.headers.authorization;
   if(token){
    jwt.verify(token.split(" ")[1], 'ankush', (err, decoded)=> {
        // console.log(decoded)
        req.body.author=decoded.author;
        req.body.authorID=decoded.authorID;
        if(err){
            res.status(400).send({"err":err.message});
        }else{
            next();
        }
      });
   }else{
    res.status(400).send({"msg":"Please provide token"}); 
   }
 }

module.exports={auth};