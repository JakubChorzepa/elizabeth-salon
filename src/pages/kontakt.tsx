import * as React from "react"
import Header from "../components/Header/Header.component";
import Layout from "../components/Layout"
import {
    MainSection,
    FindUs
  } from '../styles/kontakt.styles';

// markup
const Contact = () => {
  return (
    <Layout>
      <>
        <MainSection>
          <FindUs>
            <Header>Znajdź nas na mapie</Header>
          </FindUs>
        </MainSection>
      </>
    </Layout>
  )
}

export default Contact;