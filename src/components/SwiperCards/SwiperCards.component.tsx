import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import styled from 'styled-components'
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
  position: relative;
  margin: 0 auto;
  min-height: 60vh;
  width: 60%;
  border-radius: 20px;
  
  z-index: 999;
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
    font-size: 1.7rem;
    line-height: 160%;
    padding: 4%;

    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
      padding: 3%;
    }
  }

  img {
    border-radius: 0 0 20px 20px;
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0;
    left: 0;
    object-fit: cover;

    @media screen and (max-height: 768px) {
      height: 35%;
    }
    @media screen and (max-height: 630px) {
      display: none;
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
  z-index: 999;
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

type Offer = {
  id: string
  title: string,
  description: string,
  image: {
    url: string
  }
}

type Data = {
  elizabeth: {
    offers: [
      Offer
    ]
  }
}

const SwiperCards = () => {

  const data = useStaticQuery<Data>(graphql`
    query ElizabethOfferQuery {
      elizabeth {
        offers {
          id
          title
          description
          image {
            url
          }
        }
      }
    }
  `)

  const offers = data.elizabeth.offers;
 

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
            slidesPerView: 2.3
          }
        }}
      >

      {
        offers.map(({ id, title, description, image }, index) => (
            <SwiperSlide key={id}>
              <SliderItem isActive={index===slideIndex ? true : false}>
                <h2>{title}</h2>
                <p>{description}</p>
                {
                  image ? ( <img src={image.url} alt={title}/> ) : <></>  
                }
              </SliderItem>
            </SwiperSlide>
          )
        )
      }
      

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
