import AllCategoris from '@/api/AllCategoris'
import React from 'react'
import CategordeSwiper from './CategordeSwiper'
import { CategoryType } from '@/Type/Category.type';

export default async function CategorySlider() {
const data: CategoryType[] = await AllCategoris()
  console.log(data)
    
  return <CategordeSwiper data={data} />
}
