import * as React from 'react';
import { useState, MouseEvent } from 'react';
import {
    NavWrapper,
    LogoImage,
    NavLinksWrapper,
    PhoneNumber,
    StyledLink,
    StyledNavbarLink,
    SideBar,
    SideBarLinkWrapper,
    StyledSideBarLink
  } from './Navbar.styles';

import { StaticImage } from 'gatsby-plugin-image';
import Hamburger from '../Hamburger/Hamburger.component';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    setIsOpen(currentValue => !currentValue);
    
  }

  return (
    <NavWrapper>
      <LogoImage>
        <StyledLink to='/'>
          <StaticImage 
            src='../../images/logo.png'
            alt="elizabeth logo typed with pink color" 
            width={100}
          />
        </StyledLink>
      </LogoImage>
      <NavLinksWrapper>
        <StyledNavbarLink to='/kontakt'>Kontakt</StyledNavbarLink>
        <StyledNavbarLink to='/cennik'>Cennik</StyledNavbarLink>
      </NavLinksWrapper>
      <PhoneNumber>(+48) 602-137-250</PhoneNumber>
      <Hamburger
          onClickHandler={handleHamburgerClick}
          isOpen={isOpen}
        />
      <SideBar isOpen={isOpen}>
        <SideBarLinkWrapper>
          <StyledSideBarLink to='/kontakt'>Kontakt</StyledSideBarLink>
          <StyledSideBarLink to='/cennik'>Cennik</StyledSideBarLink>
        </SideBarLinkWrapper>   
      </SideBar>
    </NavWrapper>
 
  )
}

export default Navbar;