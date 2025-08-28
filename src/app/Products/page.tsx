import React from 'react'
import SinglProduct from '../SinglProduct/SinglProduct'
import getProdcust from '../../api/producost.api'
import AllProducts from '../_Components/NavBra/AllProduts/AllProducts'

export default async function Products() {
  const data = await getProdcust()  
  console.log(data)

  return <>
  
  <AllProducts />
  
  </>
}
