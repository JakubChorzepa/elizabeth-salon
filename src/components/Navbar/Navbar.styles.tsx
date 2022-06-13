import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
`
export const LogoImage = styled.div`
  margin: 30px;
  width: 150px;

  @media screen and (max-width: 768px) {
    width: 80px;

  }
`
