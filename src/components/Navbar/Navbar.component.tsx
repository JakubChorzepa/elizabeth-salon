import * as React from 'react';
import { 
    NavbarWrapper,
    LogoImage
  } from './Navbar.styles';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'


const Navbar = () => {
  return (
    <NavbarWrapper>
      <LogoImage>
        <StaticImage 
          src='../../images/logo.png'
          alt="elizabeth logo typed with pink color" />
      </LogoImage>
    </NavbarWrapper>
  )
}

export default Navbar;