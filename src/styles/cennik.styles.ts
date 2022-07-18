import styled from "styled-components";

export const PriceListPageWrapper = styled.div`
  padding: 5%;
`

export const PriceListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`

export const PriceListItem = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

export const ServiceCategory = styled.h2`
  @media screen and (max-width: 768px) {
    font-size: 1.8rem; 
  }
`

export const ServiceParagraph = styled.p`
  flex-basis: 70%;
  position: relative;
  font-size: ${(({ theme }) => theme.font.size.s)};
  font-weight: 500;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`

export const PriceServiceParagraph = styled(ServiceParagraph)`
  text-align: right;
  flex-basis: 30%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const ServiceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    background-color: ${(({ theme }) => theme.colors.text)};
    width: 100%;
    height: 2px;
    opacity: 0.1;
    border-radius: 10px;
  }
`

