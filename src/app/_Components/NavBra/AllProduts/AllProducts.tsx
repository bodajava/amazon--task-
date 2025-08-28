import getProdcust from '@/api/producost.api'
import SinglProduct from '@/app/SinglProduct/SinglProduct'
import { ProductType } from '@/Type/Product.type'
import React from 'react'

export default async function AllProducts() {
  const data: ProductType[] = await getProdcust()  

  return (
    <div className='w-[80%] m-auto my-12'>
      <div className='flex flex-wrap'>
        {data.map((product: ProductType) => (
          <SinglProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}
