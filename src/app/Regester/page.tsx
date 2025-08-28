"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterSchema, vregesterschemaType } from '@/schema/Regester.Schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function Register() {
  const router = useRouter()

  const form = useForm<vregesterschemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    resolver: zodResolver(RegisterSchema)
  })

  async function handleRegister(values: vregesterschemaType) {
    await axios.post(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`,
      values
    ).then((res)=>{
      console.log(res);
      if (res.data.message === "success") {
        toast.success("Register Successfully! 🎉", {
          position: "top-center",
          style: { background: "green", color: "white" }
        })
        router.push(`/Signin`) 
      }
    }).catch((err)=>{
      console.log(err);
      toast.error(err?.response?.data?.message || "Register failed!", {
        position: "top-center",
        style: { background: "red", color: "white" }
      })
    })
  }

  return (
    <div className='w-1/2 my-12 mx-auto'>
      <h1 className='text-3xl text-center font-bold my-5 text-black'>
        Register Now
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-8">

          {/* Username */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Re-Password */}
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Re-enter Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Your Phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className='w-full' type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
