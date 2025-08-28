"use client"
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'  
import { ProductType } from "@/Types/Product.Types"  

export default function SingleProduct({ product }: { product: ProductType }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 p-4">
      <Card className='p-2 cursor-pointer'>
        <Link href={`/Products/${product._id}`}>
          <CardHeader>
            <CardTitle>
              <img src={product.imageCover} alt={product.title} />
            </CardTitle>
            <CardDescription>{product.category?.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='line-clamp-1 text-teal-500'>{product.title}</p>
          </CardContent>
          <CardFooter>
            <div className='flex justify-between w-full'>
              <span>{product.price} EGY</span>
              <span>{product.ratingsAverage} <i className='fas fa-star text-yellow-600'></i></span>
            </div>
          </CardFooter>
        </Link>
        <Button className='cursor-pointer' variant="outline">Add To Cart</Button>
      </Card>
    </div>
  )
}
