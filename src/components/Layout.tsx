import React, { Fragment } from 'react';
import GlobalStyle from '../styles/globalStyles';
import SEO from './SEO';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

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
      <>{children}</>
    </ThemeProvider>
  )
};

export default Layout;