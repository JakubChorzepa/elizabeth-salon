import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
`

export const LogoImage = styled.div`
  display: block;
  margin: 30px;
  width: 150px;

  @media screen and (max-width: 768px) {
    width: 90px;
    margin: 40px 10px 0 10px;
  }
`

export const NavLinksWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`

export const PhoneNumber = styled.div`
  color: ${(({ theme }) => theme.colors.text) };
   cursor: pointer;
   padding: 15px;
   margin: 0 40px;
   font-weight: 500;
   transition: color .15s ease-in-out;
   border: none;
   background-color: transparent;
   font: ${(({ theme }) => theme.font.size.s)} 500;

   &:hover {
      color: ${(({ theme }) => theme.colors.primary)};
    }
`
