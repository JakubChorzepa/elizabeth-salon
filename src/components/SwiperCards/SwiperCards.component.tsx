import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


const StyledSwiper = styled(Swiper)`
  text-align: center;
  width: 100%;
  margin: 50px 0 70px 0;

  @media screen and (min-width: 768px) {
    margin: 100px 0;
  }
`

type SliderItemProps = {
  isActive: boolean,
}

const SliderItem = styled.div<SliderItemProps>`
  margin: 0 auto;
  height: 60vh;
  width: 60%;
  border-radius: 20px;
  background-color: ${(({ isActive }) => isActive ? '#D64ACE' : '#F5F5F5')};
  color: ${(({ isActive }) => isActive ? '#fff' : '#333333')};
  transition: background-color .5s .15s ease-in-out, color .5s ease-in-out;
  text-align: center;
  

  @media screen and (max-width: 1300px) {
    width: 100%;
  }

  @media screen and (max-width: 800px) and (orientation: landscape) {
    width: 90%;
  }

  h2 {
    padding: 5%;
    @media screen and (max-width: 768px) {
      font-size: ${(({ theme }) => theme.font.size.s)};
    }
  }

  p {
    font-size: 16px;
    padding: 5%;

    @media screen and (max-width: 768px) {
      font-size: ${(({ theme }) => theme.font.size.s)};
      padding: 2%;
    }
  }

`

type SwiperButtonProps = {
  position: string
}

const SwiperButton = styled.button<SwiperButtonProps>`
  position: absolute;
  display: block;
  width: 40px;
  height: 40px;
  outline: none;
  border: none;
  background: transparent;
  bottom: 50%;
  ${(( { position }) => position === 'right' ? 'right: 30%' : 'left: 30%')};

  @media screen and (max-width: 1300px) {
    cursor: none;
    bottom : 0;
    ${(( { position }) => position === 'right' ? 'right: 0' : 'left: 0')};
  }

  .swiper-button-next,
  .swiper-button-prev {
    padding: 30px;
    color: ${(({ theme }) => theme.colors.text)};
  }
`

export const SwiperPagination = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
`

const SwiperCards = () => {


  const [ slideIndex, setSlideIndex ] = useState(0);

  return (
    <>
      <StyledSwiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1.5}
        speed={500}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction'
        }}
        onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
        breakpoints={{
          768: {
            slidesPerView: 2.5
          }
        }}
      >

        {/* {
          slides.map(({ id, title, discription, imageName, imageAlt }) => (
              <SwiperSlide key={id}>
                <SliderItem isActive={id===slideIndex ? true : false}>
                  <h2>{title}</h2>
                  <p>{discription}</p>
                  <img src={`/images/${imageName}`} />
                </SliderItem>
              </SwiperSlide>
            )
          )
        } */}
      

      </StyledSwiper>

      <SwiperButton position='right'>
        <div className='swiper-button-next' /> 
      </SwiperButton>
      <SwiperButton position='left'>
        <div className='swiper-button-prev' /> 
      </SwiperButton>

      <SwiperPagination className='swiper-pagination'/>

    </>
  )
}

export default SwiperCards;
