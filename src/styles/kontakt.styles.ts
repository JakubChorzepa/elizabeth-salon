import styled from "styled-components";

export const MainSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: 90vh;
  padding: 3%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

`

export const FindUsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-basis: 40%;

  @media screen and (max-width: 1000px) {
    flex-basis: auto;
    width: 100%;
  }
`

export const ContactAndScheduleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 10%;

  @media screen and (max-width: 1000px) {
    flex-basis: auto;
    width: 90%;
    margin: 20px 0;
  }
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactInformationWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin-left: 10px;
  }
`