"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginSchema, vLoginSchemaType } from '@/schema/Login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { signIn } from "next-auth/react";

export default function Signin() {
  const router = useRouter()

  const form = useForm<vLoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema)
  })

  async function handleSignin(values: vLoginSchemaType) {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/"
    })

    if (res?.error) {
      toast.error(res.error || "Login failed!", {
        position: "top-center",
        style: { background: "red", color: "white" }
      })
    } else {
      toast.success("Login Successfully! 🎉", {
        position: "top-center",
        style: { background: "green", color: "white" }
      })
window.location.href = '/'
    }
  }

  return (
    <div className='w-1/2 my-12 mx-auto'>
      <h1 className='text-3xl text-center font-bold my-5 text-black'>
        Signin Now
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignin)} className="space-y-8">
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

          <Button className='w-full' type="submit">Signin</Button>
        </form>
      </Form>
    </div>
  )
}
