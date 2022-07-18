import * as React from 'react';
import { useState, useEffect, MouseEvent } from 'react';
import {
    NavWrapper,
    LogoImage,
    NavLinksWrapper,
    PhoneNumber,
    StyledLink,
    StyledNavbarLink,
    SideBar,
    SideBarLinkWrapper,
    StyledSideBarLink,
    SidebarPhoneNumber,
    PhoneCopiedInformation
  } from './Navbar.styles';

import { StaticImage } from 'gatsby-plugin-image';
import Hamburger from '../Hamburger/Hamburger.component';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const toggleIsOpen = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    setIsOpen(currentValue => !currentValue);
  }

  const copyPhoneNumber = () => {
    if (navigator.clipboard && window.isSecureContext) {
      if(!isCopied) {
        navigator.clipboard.writeText('602 137 250').then(() => {
  
          setIsCopied(true);
    
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        })
      }
    }
  }
  

  useEffect(() => {
    isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [isOpen])

  return (
    <NavWrapper>
      <PhoneCopiedInformation isCopied={isCopied}>Skopiowano numer</PhoneCopiedInformation>
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
        <StyledNavbarLink to='/'>Strona główna</StyledNavbarLink>
        <StyledNavbarLink to='/kontakt'>Kontakt</StyledNavbarLink>
        <StyledNavbarLink to='/cennik'>Cennik</StyledNavbarLink>
      </NavLinksWrapper>
      <PhoneNumber onClick={copyPhoneNumber}>(+48) 602-137-250</PhoneNumber>
      <Hamburger
          onClickHandler={toggleIsOpen}
          isOpen={isOpen}
        />
      <SideBar isOpen={isOpen}>
        <SideBarLinkWrapper>
          <StyledSideBarLink to='/'>Strona główna</StyledSideBarLink>
          <StyledSideBarLink to='/kontakt'>Kontakt</StyledSideBarLink>
          <StyledSideBarLink to='/cennik'>Cennik</StyledSideBarLink>
          <SidebarPhoneNumber onClick={copyPhoneNumber}>(+48) 602-137-250</SidebarPhoneNumber>
        </SideBarLinkWrapper>   
      </SideBar>
    </NavWrapper>
 
  )
}

export default Navbar;