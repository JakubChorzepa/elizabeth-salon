import React, { Fragment } from 'react';
import GlobalStyle from '../styles/globalStyles';

type Props = {
  title: string,
  children?: JSX.Element,
}


const Layout = ({ title, children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <>{children}</>
    </>
  )
};

export default Layout;