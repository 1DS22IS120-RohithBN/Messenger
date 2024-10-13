'use client'
import Button from '@/app/components/Button'
import Input from '@/app/components/inputs/Input'
import React, { useCallback, useState } from 'react'
import { FieldValue, FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import AuthSocialButton from './AuthSocialButton'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import Link from 'next/link'

type Variant="LOGIN"|"REGISTER"
const AuthLayout = () => {
    const[variant,setVariant]=useState<Variant>("REGISTER")
    const [isSubmitting,setIsSubmitting]=useState(false)
    
    const toggleVariant=useCallback(()=>{
        if(variant==='LOGIN'){
            setVariant('REGISTER')
        }
        else{
            setVariant('LOGIN')
            }

    },[variant])

    const {register,handleSubmit,formState:{errors}}=useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:'',
        }
    })

    

    const onSubmit:SubmitHandler<FieldValues>=async(data)=>{
        setIsSubmitting(true)
        console.log("submitted")
        if(variant==='REGISTER'){
        //axios for signup

        }
        else if(variant==='LOGIN'){
                    //next-auth signIn

            
        }


    }

    const socialAction=(action:string)=>{
        setIsSubmitting(true)
        // next-auth social action
    }

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white px-4 py-6 shadow sm:rounded-lg sm:px-10'>
            <form className='space-y-6 items-center'
            onSubmit={handleSubmit(onSubmit)}>
                {variant==='REGISTER' && (
                    <Input id='name' label='Name' register={register}  error={errors} type='text'/>
                )}
                <Input id='email' label='Email' register={register}  error={errors} type='email'/>
                <Input id='password' label='Password' register={register}  error={errors} type='password'/>
                <Button
                type='submit' fullWidth
                >{variant==='LOGIN'?"Sign In":"Register"}</Button>
            </form>
            <div className='mt-6'>
                <div className='relative'>
                    <div className='absolute flex items-centerinset-0'>
                        <div className='w-full border-t-2 border-black' />
                        
                    </div>
                    <div className='relative flex justify-center text-sm'>
                        <span className='bg-white px-2 text-gray-500'>Or continue with</span>
                    </div>
                </div>
                <div className='mt-6 flex gap-2'>

                    <AuthSocialButton
                    disabled={isSubmitting}
                    icon={BsGithub}
                    onClick={()=>socialAction('github')}
                    />
                    <AuthSocialButton
                     disabled={isSubmitting}
                    icon={BsGoogle}
                    onClick={()=>socialAction('google')}
                    />
                </div>
            </div>
            <div className='mt-6 text-gray-600 p-2 flex gap-2 items-center justify-center'>
                <div>
                {variant==='LOGIN'?"Don't have an account?":"Already have an account?"}
                </div>
            <div className=' underline cursor-pointer' onClick={toggleVariant}>
                {variant==='REGISTER'?"Login":"SignUp here"}
            </div>
            </div>


        </div>
    </div>
  )
}

export default AuthLayout