import React from 'react';

import {Swiper , SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"

const CommunitySlider = ({ testimonials }) => {
  
  return (
    <Swiper slidesPerView={3} spaceBetween={32} centeredSlides={"auto"} grabCursor={true} modules={[]}>
    {testimonials.map((testimonial,idx)=>{

      const {image,name,message} = testimonial;

      return <SwiperSlide key={idx}>
        <div className="">
          <div>
            <img src={image} alt="" />
          </div>
          <div className='absolute bottom-[30px] text-white p-[20px]'>
            <div className='mb-8 italic text-lg font-light'>{message}</div>
            <div className='flex items-center justify-center gap-x-[3px]'>
              <span className='text-[30px] font-bold text-primary-200'>~</span>
              <div className='text-[20px] font-bold'>{name}</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    })}
  </Swiper>
    
  )
  // <Swiper slidesPerView={3}>
  //   {testimonials.map((testmonial,idx)=>{
  //     return <SwiperSlide key={idx}>
  //       <div className="relative">
  //         <div>
  //           <img src={image} alt="" />
  //         </div>
  //       </div>
  //     </SwiperSlide>
  //   })}
  // </Swiper>;
  
};

export default CommunitySlider;
