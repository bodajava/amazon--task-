"use client"
import React from 'react'
import img1 from "../../../public/images/slider-image-1.jpeg"
import img2 from "../../../public/images/slider-image-2.jpeg"
import img3 from "../../../public/images/slider-image-3.jpeg"
import img4 from "../../../public/images/grocery-banner.png"
import img5 from "../../../public/images/banner-4.jpeg"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules'

export default function MainSlider() {
    return (
        <div className='w-[90%] mx-auto my-4 flex flex-col lg:flex-row gap-4'>

            <div className='w-full lg:w-3/4'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Autoplay, EffectFade]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    loop={true}
                >
                    <SwiperSlide>
                        <Image className="w-full h-[300px] md:h-[400px] object-cover rounded-lg transition-all duration-700 ease-in-out" src={img1} alt="slide1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="w-full h-[300px] md:h-[400px] object-cover rounded-lg transition-all duration-700 ease-in-out" src={img3} alt="slide2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="w-full h-[300px] md:h-[400px] object-cover rounded-lg transition-all duration-700 ease-in-out" src={img5} alt="slide3" />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Side images */}
            <div className='w-full lg:w-1/4 flex flex-col gap-4'>
                <Image className="w-full h-[150px] md:h-[200px] object-cover rounded-lg transition-all duration-700 ease-in-out" src={img4} alt="side1" />
                <Image className="w-full h-[150px] md:h-[200px] object-cover rounded-lg transition-all duration-700 ease-in-out" src={img2} alt="side2" />
            </div>
        </div>
    )
}
