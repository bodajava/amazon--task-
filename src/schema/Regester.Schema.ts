"use client"
import * as z from "zod" 
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

export const RegisterSchema = z.object({
  name: z.string()
    .nonempty("This field can't be empty")
    .min(3, "Min length 3 characters")
    .max(15, "Max length 15 characters"),

  email: z.string()
    .nonempty("This field can't be empty")
    .email("Invalid email address"),

  password: z.string()
    .nonempty("This field can't be empty")
    .min(6,"Min length 6 characters"),

  rePassword: z.string()
    .nonempty("This field can't be empty"),

  phone: z.string()
    .regex(/^01[0251][0-9]{8}$/, "Your phone number is wrong")
}).refine((object)=> object.password === object.rePassword ,{
    path:['rePassword'],
    message:"Password and Re-Password do not match" 
})


 export type vregesterschemaType = z.infer<typeof RegisterSchema>