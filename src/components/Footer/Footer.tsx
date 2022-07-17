import React from 'react'
import styled from 'styled-components';

const FooterWrapper = styled.div`
  width: 100vw;
  min-height: 100px;
  background-color: ${(({ theme }) => theme.colors.primary)};
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    color: #fff;
    padding: 2px 10px;
    font-size: ${(({ theme }) => theme.font.size.s)};
    opacity: 0.8;

    @media screen and (max-width: 768px) {
      font-size: ${(({ theme }) => theme.font.size.xs)};
    }
  }
`



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <p>(+48) 602-137-250 Dąbrówki 222, 37-100 Łańcut</p>
      <p>Wszelkie prawa zastrzeżone ©{currentYear} Salon kosmetyczny Elizabeth</p>
    </FooterWrapper>
  )
}

export default Footer;
