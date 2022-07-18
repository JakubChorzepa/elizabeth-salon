import * as React from "react"
import styled from 'styled-components';

const NotFoundHeader = styled.h1`
  position: absolute;
  left: 50%;
  margin-top: 50px;
  transform: translate(-50%, -50%);
  text-align: center;
`



const NotFoundPage = () => {
  return (
    <main>
      <NotFoundHeader>
        Nie znaleziono strony
      </NotFoundHeader>
    </main>
  )
}

export default NotFoundPage
