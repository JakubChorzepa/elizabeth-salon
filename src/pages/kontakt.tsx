import * as React from "react"
import Header from "../components/Header/Header.component"
import Layout from "../components/Layout"
import { useLoadScript } from '@react-google-maps/api'
import Map from '../components/Map/Map.component'
import { MdLocationPin } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import styled from "styled-components"
import {
    MainSection,
    FindUsWrapper,
    ContactAndScheduleWrapper,
    InfromationsWrapper,
    ContactInformationWrapper
    
  } from '../styles/kontakt.styles'
import FlowerBackground from "../components/FlowerBackground/FlowerBackground.component"

const StyledHeader = styled(Header)`
  margin-bottom: 20px;
`

// markup
const ContactPage = () => {
  const { isLoaded }  = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY ?? '',
  })
  return (
    <Layout>
      <>
        <FlowerBackground topDistance={25} />
        <MainSection>
          <FindUsWrapper>
            <StyledHeader>Znajdź nas na mapie</StyledHeader>
            {
              isLoaded ? <Map /> : <div>Loading...</div>
            }
          </FindUsWrapper>
          <ContactAndScheduleWrapper>
            <InfromationsWrapper>
              <StyledHeader>Kontakt</StyledHeader>
              <ContactInformationWrapper>
                <MdLocationPin size='2.3rem' color='#D64ACE'/>
                <p>(+48) 602-137-250</p>
              </ContactInformationWrapper>
              <ContactInformationWrapper>
                <BsFillTelephoneFill size='2.3rem' color='#D64ACE' />
                <p>Dąbrówki 222, 37-100 Łańcut</p>
              </ContactInformationWrapper>
            </InfromationsWrapper>
            <InfromationsWrapper>
              <StyledHeader>Godziny otwarcia</StyledHeader>
              <p>Poniedziałek 11:00 - 18:00</p>
              <p>Wtorek 09:00 - 16:00</p>
              <p>Środa 11:00 - 18:00</p>
              <p>Czwartek 09:00 - 16:00</p>
              <p>Piątek 09:00 - 16:00</p>
              <p>Sobota Na umówione godziny. Proszę dzwonić</p>
            </InfromationsWrapper>

          </ContactAndScheduleWrapper>
        </MainSection>
      </>
    </Layout>
  )
}

export default ContactPage;