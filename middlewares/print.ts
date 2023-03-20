import { NextFunction, Request, Response } from "npm:express@4.18.2";

const print = (req:Request, res:Response, next:NextFunction)=>{
    console.log(req.method, req.url);
  

    next();
}


export default print