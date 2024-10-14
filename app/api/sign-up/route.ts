import { NextRequest,NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import prisma from '@/app/libs/prismadb'

export async function POST(request:Request){
    const {name,email,password}=await request.json();

    if(!email ||  !password || !name){
        return new Response('Please fill all the fields', {status:400})
    }
   try {
     const existingUser=await prisma.user.findUnique({
         where:{
             email:email
         }
     })
     if(existingUser){
         return new Response('User already exists', {status:400})
         }
     const hashedPassword=await bcrypt.hash(password,12)
 
     const user= await prisma.user.create({
         data:{
             name,
             email,
             hashedPassword
         }
     })
    return Response.json({
    message:'User created successfully',
    user
    },
    {   
        status:201
    })  
}
     catch (error) {
    console.error(error)
    return new Response('Something went wrong', {status:500})
    
   }

}