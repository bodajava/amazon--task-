import React from 'react'
import { Button } from "@/components/ui/button"
import { ProductType } from '@/Type/Product.type'

interface DeatilseProps {
  data: ProductType
}

export default function Deatilse({ data }: DeatilseProps) {
  return (
    <div className="container w-[90%] p-4 mx-auto flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/3">
        <div className="p-4">
          <img src={data.imageCover} className="w-full rounded-xl" alt={data.title} />
        </div>
      </div>

      <div className="w-full md:w-2/3">
        <div className="p-5">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">{data.title}</h1>
          <p className="text-gray-600">{data.description}</p>
          <p className="my-3 text-green-500">{data.category?.name}</p>

          <div className="flex flex-col sm:flex-row justify-between w-full my-4 gap-3">
            <span className="font-semibold">{data.price} EGY</span>
            <span>
              {data.ratingsAverage} <i className="fas fa-star text-yellow-600"></i>
            </span>
          </div>

          <Button className="cursor-pointer my-4 w-full sm:w-1/2" variant="outline">
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
