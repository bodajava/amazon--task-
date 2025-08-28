import React from "react"
import SelectedProduct from '@/api/SelectedProduct'
import Deatilse from "@/app/_Components/NavBra/Deatilse/Deatilse"
import { ProductType } from '@/Type/Product.type'

interface ProductDeaitelsProps {
  params: {
    id: string
  }
}

export default async function ProductDeaitels({ params }: ProductDeaitelsProps) {
  const data: ProductType = await SelectedProduct(params.id)
  return <Deatilse data={data} />
}
