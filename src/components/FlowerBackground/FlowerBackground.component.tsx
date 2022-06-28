import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'


type FlowerBackgroundProps = {
  topDistance?: number,
}

const FlowerBacgkroundWrapper = styled.div<FlowerBackgroundProps>`
  position: fixed;
  top: ${(({ topDistance }) => `${topDistance}vh`)};
  left: -30px;
  z-index: -1;
  opacity: 0.4;
  transform: rotate(90deg);
`


const FlowerBackground = ({ topDistance=50 }: FlowerBackgroundProps) => (
  <FlowerBacgkroundWrapper topDistance={topDistance} >
    <StaticImage src='../../images/BackgroundFlowerPattern.png' alt='background flower image'/>
  </FlowerBacgkroundWrapper>
)

export default FlowerBackground;
