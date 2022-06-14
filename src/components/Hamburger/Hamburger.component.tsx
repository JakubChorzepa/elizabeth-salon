import React from 'react'
import styled from "styled-components";
import { MouseEvent } from 'react';

type StyledHamburgerProps = {
  isOpen: boolean
}

type HamburgerProps = {
  isOpen: boolean,
  onClickHandler: (e: MouseEvent<HTMLButtonElement>) => void,
}

const StyledHamburger = styled.button`
  border: none;
  background: none;
  padding: 20px;
  margin: 0 20px;
  cursor: pointer;
  z-index: 100;

  @media screen  and (max-width: 280px){
    margin: 0 10px;
  }

  @media screen and (min-width: 1000px){
    display: none;
  }
`

const InnerHamburger = styled.div<StyledHamburgerProps>`
  display: inline-block;
  position: relative;
  width: 28px;
  height: 3px;
  background-color: ${(({ isOpen }) => isOpen ? 'transparent': '#333'  )};
  transition: background-color .15s ease-in-out;

  &::after, &::before {
    position: absolute;
    content: '';
    width: 28px;
    height: 3px;
    left: 0;
    background-color: ${(({ isOpen }) => isOpen ? '#fff': '#333'  )};
    transition: transform .15s ease-in-out, background-color .35s ease-in-out;
  }

  &::after {
    top: ${(({ isOpen }) => isOpen ? '0': '8px')};
    transform: rotate(${(({ isOpen }) => isOpen ? '45deg': '0')});
  }
  &::before {
    top: ${(({ isOpen }) => isOpen ? '0': '-8px')};
    transform: rotate(${(({ isOpen }) => isOpen ? '-45deg': '0')});
  }

  
`

const Hamburger = ({ isOpen, onClickHandler }: HamburgerProps ) => (
  <StyledHamburger onClick={onClickHandler}>
    <InnerHamburger isOpen={isOpen}></InnerHamburger>
  </StyledHamburger>
);

export default Hamburger;
