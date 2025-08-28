"use client"
import * as z from "zod" 
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

export const LoginSchema = z.object({
  
  email: z.string()
    .nonempty("This field can't be empty")
    .email("Invalid email address"),

  password: z.string()
    .nonempty("This field can't be empty")
    .min(6,"Min length 6 characters"),
})

export type vLoginSchemaType = z.infer<typeof LoginSchema>

