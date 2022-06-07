import * as React from "react"
import styled from 'styled-components';

const NotFoundHeader = styled.h1`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
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
