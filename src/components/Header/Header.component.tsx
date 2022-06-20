import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.h1`
  font-size: ${(({ theme }) => theme.font.size.l)};

  @media screen and (max-width: 768px) {
    font-size: ${(({ theme }) => theme.font.size.m)};
  }
`

const HeaderSpan = styled.span`
  position: relative;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${(({ theme }) => theme.colors.primary)};
    width: 100%;
    height: 5px;
  }
  
`
type Props = {
  children: string,
  className?: string
}

const Header = ({ children, className }: Props) => (
  <HeaderWrapper className={className}>
    <HeaderSpan>
      {children}
    </HeaderSpan>
  </HeaderWrapper>
);

export default Header;
