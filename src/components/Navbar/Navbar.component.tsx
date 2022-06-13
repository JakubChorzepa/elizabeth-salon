import * as React from 'react';
import {
    NavWrapper,
    LogoImage,
    NavLinksWrapper,
    PhoneNumber
  } from './Navbar.styles';

import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
   text-decoration: none;
   color: ${(({ theme }) => theme.colors.text) };
   font-size: ${(({ theme }) => theme.font.s) };
   cursor: pointer;
   padding: 15px;
   margin: 0 40px;
   font-weight: 500;
   transition: color .15s ease-in-out;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
      color: ${(({ theme }) => theme.colors.primary)};
    }
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <LogoImage>
        <StyledLink to='/'>
          <StaticImage 
            src='../../images/logo.png'
            alt="elizabeth logo typed with pink color" 
          />
        </StyledLink>
      </LogoImage>
      <NavLinksWrapper>
        <StyledLink to='/kontakt'>Kontakt</StyledLink>
        <StyledLink to='/cennik'>Cennik</StyledLink>
      </NavLinksWrapper>
      <PhoneNumber>
        (+48) 602-137-250
      </PhoneNumber>
    </NavWrapper>
  )
}

export default Navbar;