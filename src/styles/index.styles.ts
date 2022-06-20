import styled from "styled-components";


export const HeroSection = styled.section`
  display: flex;
  position: relative;
  min-height: calc(100vh - 98px);
`

export const HeroText = styled.h1`
  margin: 10% auto;
  font-size: ${(({ theme }) => theme.font.size.xl)};
  line-height: 160%;

  @media screen and (max-width: 1500px){
    margin-left: 50px;
  }

  @media screen and (max-width: 768px) {
    font-size: ${(({ theme }) => theme.font.size.l)};
    margin: 40% 30px;
  }

  span {
    color: ${(({ theme }) => theme.colors.primary)};
  }
`

export const FlowerImageWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 10px;
  
  @media screen and (max-height: 600px) {
    right: 0;
    left: unset;
    transform: rotate(270deg);
    opacity: 0.5;
  }

  @media screen and (max-width: 768px) {
    right: 0;
    left: unset;
    transform: rotate(270deg);
  }
`

export const HeroImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media screen and (max-width: 1500px){
    display: none;
  }
`

export const OfferSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`