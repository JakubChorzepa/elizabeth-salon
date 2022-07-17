import React, { Fragment } from 'react';
import GlobalStyle from '../styles/globalStyles';
import SEO from './SEO';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Navbar from './Navbar/Navbar.component';
import Footer from './Footer/Footer';

type Props = {
  title?: string,
  description?: string
  children?: JSX.Element,
}


const Layout = ({ title, description, children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO title={title} description={description} />
      <GlobalStyle />
      <>
        <Navbar />
        {children}
      </>
      <Footer />
    </ThemeProvider>
  )
};

export default Layout;