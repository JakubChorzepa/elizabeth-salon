import styled from "styled-components";
import { Link } from 'gatsby';

type StyledSideBarProps = {
  isOpen: boolean
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
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 25vh;
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
`