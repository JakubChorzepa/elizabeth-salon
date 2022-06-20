import * as React from "react"
import Layout from "../components/Layout"
import { 
        HeroSection,
        HeroText,
        FlowerImageWrapper,
        HeroImageWrapper,
        OfferSection
      } from "../styles/index.styles"
import Header from '../components/Header/Header.component';
import SwiperCards from '../components/SwiperCards/SwiperCards.component';
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledHeader = styled(Header)`
  margin-top: 50px;
`

// markup
const IndexPage = () => {
  return (
    <Layout>
      <>
        <HeroSection>
          <HeroText>
            Cenimy <br /> 
            sobie <br /> 
            <span>piękno</span>
          </HeroText>
          <HeroImageWrapper>
            <StaticImage src='../images/Woman.png' alt='kobieta' />
          </HeroImageWrapper>
          <FlowerImageWrapper>
            <StaticImage 
              src='../images/FlowerPattern.png'
              alt="logo salonu elizabeth pisane różową czcionką" 
            />
          </FlowerImageWrapper>
        </HeroSection>
        <OfferSection>
          <StyledHeader>
            Oferta
          </StyledHeader>
          <SwiperCards />
        </OfferSection>
      </>
    </Layout>
  )
}

export default IndexPage
