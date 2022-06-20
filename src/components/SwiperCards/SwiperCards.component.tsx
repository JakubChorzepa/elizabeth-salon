import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import styled from 'styled-components'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


const StyledSwiper = styled(Swiper)`
  text-align: center;
  width: 100%;
  margin: 50px 0 100px 0;

  @media screen and (min-width: 768px) {
    margin: 100px 0;
  }
`

const SliderItem = styled.div`
  margin: 0 auto;
  height: 600px;
  width: 60%;
  border-radius: 20px;
  background-color: ${(({ theme }) => theme.colors.primary)};

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 350px;
  }

  @media screen and (max-width: 768px) and (orientation: landscape) {
    width: 90%;
    height: 280px;
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

  @media screen and (max-width: 900px) {
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


const SwiperCards = () => (
  <>
    <StyledSwiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1.7}
      centeredSlides={true}
      loop={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ 
        clickable: true,
        type: 'fraction'
      }}
      onSlideChange={() => {}}
      breakpoints={{
        768: {
          slidesPerView: 2.5
        }
      }}
    >
      <SwiperSlide>
        <SliderItem>Slide 1</SliderItem>
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem>Slide 2</SliderItem>
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem>Slide 3</SliderItem>
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem>Slide 4</SliderItem>
      </SwiperSlide>
    </StyledSwiper>

    <SwiperButton position='right'>
      <div className='swiper-button-next' /> 
    </SwiperButton>
    <SwiperButton position='left'>
      <div className='swiper-button-prev' /> 
    </SwiperButton>

  </>
)

export default SwiperCards;
