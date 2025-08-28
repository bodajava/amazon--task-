import AllCategoris from '@/api/AllCategoris'
import { log } from 'console'
import React from 'react'
import { Image } from 'next/image';
import CategordeSwiper from './CategordeSwiper';

export default async function CategorySlider() {

    let data  = await AllCategoris()
    console.log(data);
    
  return (
  <>
                <CategordeSwiper data={data} />
  </>
  )
}
