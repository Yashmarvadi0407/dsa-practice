import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req:NextApiRequest, res:NextApiResponse) {
  const {name,email}=req.body
console.log("name,email",name,email)
  res.status(200).json({ text: `Hello${name}${email}` });
}




