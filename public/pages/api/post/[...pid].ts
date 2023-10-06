import { NextApiRequest, NextApiResponse } from "next";
  
export default function handler(req:NextApiRequest,res:NextApiResponse){
    const {pid}=req.query;
    console.log("pid",pid,req.query)
  if(pid === "user"){
  }
    //  res.status(200).json("hello user");
}