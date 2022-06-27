import * as React from "react"
import Header from "../components/Header/Header.component"
import Layout from "../components/Layout"
import { useLoadScript } from '@react-google-maps/api'
import Map from '../components/Map/Map.component'
import { MdLocationPin } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import {
    MainSection,
    FindUsWrapper,
    ContactAndScheduleWrapper,
    Contact,
    ContactInformationWrapper
    
  } from '../styles/kontakt.styles'

// markup
const ContactPage = () => {
  const { isLoaded }  = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY ?? '',
  })
  return (
    <Layout>
      <>
        <MainSection>
          <FindUsWrapper>
            <Header>Znajdź nas na mapie</Header>
            {
              isLoaded ? <Map /> : <div>Loading...</div>
            }
          </FindUsWrapper>
          <ContactAndScheduleWrapper>
            <Contact>
              <Header>Kontakt</Header>
              <ContactInformationWrapper>
                <MdLocationPin size='2.3rem' color='#D64ACE'/>
                <p>Dąbrówki 222, 37-100 Łańcut</p>
              </ContactInformationWrapper>
              <ContactInformationWrapper>
                <BsFillTelephoneFill size='2.3rem' color='#D64ACE' />
                <p>(+48) 602-137-250</p>
              </ContactInformationWrapper>
            </Contact>
          </ContactAndScheduleWrapper>
        </MainSection>
      </>
    </Layout>
  )
}

export default ContactPage;