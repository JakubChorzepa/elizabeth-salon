import styled from "styled-components";
import { Link } from 'gatsby';

type StyledSideBarProps = {
  isOpen: boolean
}

type PhoneCopiedInformationProps = {
  isCopied: boolean
}

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  z-index: 999;
  top: 0;
`

export const LogoImage = styled.div`
  display: block;
  margin: 30px;
  @media screen and (max-width: 1000px) {
    margin: 30px 0px;
  }
`

export const NavLinksWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const StyledLink = styled(Link)`
   text-decoration: none;
   padding: 15px;
   font-weight: 500;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    
`;

export const StyledNavbarLink = styled(StyledLink)`
  color: ${(({ theme }) => theme.colors.text) };
  font-size: ${(({ theme }) => theme.font.s) };
  transition: color .15s ease-in-out;
  margin: 0 40px;
  cursor: pointer;

  &:hover {
      color: ${(({ theme }) => theme.colors.primary)};
    }
`

export const PhoneNumber = styled.div`
  padding: 15px;
  margin: 0 20px;
  font-weight: 500;
  font: ${(({ theme }) => theme.font.size.s)} 500;
  cursor: pointer;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const SideBar = styled.div<StyledSideBarProps>`
  height: 100vh;
  width: 100vw;
  background-color: ${(({ theme }) => theme.colors.primary)};
  position: fixed;
  top: 0;
  right: ${(({ isOpen }) => isOpen ? '0': '100vw'  )};
  transition: right 0.35s ease-in-out;
  z-index: 10;
`

export const SideBarLinkWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const StyledSideBarLink = styled(StyledLink)`
  color: #fff;
  font-size: ${(({ theme }) => theme.font.size.m)};
  font-weight: 400;
  margin: 20px 0;
`

export const SidebarPhoneNumber = styled.div`
  color: #fff;
  font-size: ${(({ theme }) => theme.font.size.s)};
  margin: 50px 0;

  @media screen and (max-height: 560px) {
    margin: 15px 0;
  }
`

export const PhoneCopiedInformation = styled.div<PhoneCopiedInformationProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 500;
  font-size: ${(({ theme }) => theme.font.size.s)};
  padding: 12px 25px;
  position: fixed;
  z-index: 999;
  top: ${(({ isCopied }) => isCopied ? '20px' : '-100px')};
  left: 50%;
  background-color: #fff;
  transform: translateX(-50%);
  border-radius: 10px;
  box-shadow: 3px 5px 24px -12px rgba(66, 68, 90, 1);
  transition: all .2s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: ${(({ theme }) => theme.font.size.xs)};
  }

`