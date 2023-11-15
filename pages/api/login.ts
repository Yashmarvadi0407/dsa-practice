import { NextApiRequest, NextApiResponse } from "next"


export default function handler(req:NextApiRequest,res:NextApiResponse){
    const {email,pass}=req.body
    console.log("first",email,pass)
    return res.status(200).json({text:"login success"})
}