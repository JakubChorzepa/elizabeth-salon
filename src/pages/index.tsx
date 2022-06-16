import * as React from "react"
import Layout from "../components/Layout"
import { 
        HeroSection,
        HeroText,
        FlowerImageWrapper,
        HeroImageWrapper
      } from "../styles/index.styles"
import { StaticImage } from "gatsby-plugin-image";


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
              height={350}
            />
          </FlowerImageWrapper>
        </HeroSection>
      </>
    </Layout>
  )
}

export default IndexPage
