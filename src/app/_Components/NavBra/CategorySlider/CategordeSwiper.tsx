"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper/modules'
import Image from 'next/image';
import { CategoryType } from '@/Type/Category.type';

interface CategordeSwiperProps {
  data: CategoryType[];
}

export default function CategordeSwiper({ data }: CategordeSwiperProps) {
  return (
    <div className='w-[90%] mx-auto'>
      <h2 className="text-slate-500 font-semibold mb-3">
        Shop Popular Categories
      </h2>
      <Swiper
        spaceBetween={10}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },   
          640: { slidesPerView: 4 },   
          768: { slidesPerView: 5 },  
          1024: { slidesPerView: 6 },  
          1280: { slidesPerView: 7 },  
        }}
      >
        {data.map((category) => (
          <SwiperSlide key={category._id}>
            <div className="flex flex-col items-center">
              <Image
                src={category.image}
                alt={category.name}
                width={150}
                height={150}
                className="h-[150px] object-cover rounded-md border"
              />
              <p className="text-center text-sm mt-2 font-medium">
                {category.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
