'use client'
import clsx from 'clsx'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps{
    label:string,
    id : string,
    type?:string,
    required?:boolean,
    register:UseFormRegister<FieldValues>,
    error?:FieldErrors
    disabled?:boolean

}

const Input:React.FC<InputProps> = ({
    label,
    id,
    type='text',
    required,
    register,
    error,
    disabled
}) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input
        id={id}
        type={type}
        {...register(id,{required})}
        disabled={disabled}
        className={clsx(
            'block w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-sky-400 overflow-hidden outline-none mt-2',
            
            )}
        />
    </div>
  )
}

export default Input