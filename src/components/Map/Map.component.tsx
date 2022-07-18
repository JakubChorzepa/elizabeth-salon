import React from 'react'
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import styled from 'styled-components';

const GoogleMapWrapper = styled.div`
  margin: 10px 0;
  height: 55vh;
  width: 87%;

  @media screen and (max-height: 500px) {
    height: 300px;
  }

  .map-container {
    width: 100%;
    height: 100%;
  }
`

const GoogleInformationWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font: ${(({ theme }) => theme.font.size.xs)} ${(({ theme }) => theme.font.family.Poppins)};
`

const DirectionLink = styled.a`
  text-decoration: none;
  color: ${(({ theme }) => theme.colors.primary)};
  font-weight: 500;
`


const Map = () => {

  const lats = { lat: 50.11655569476691, lng: 22.23283049987109 };

  return (
    <GoogleMapWrapper>
      <GoogleMap 
        zoom={15} 
        center={lats}
        mapContainerClassName='map-container'
      >
        <Marker 
          position={lats}
          >
            <InfoWindow position={lats} options={{pixelOffset: new google.maps.Size(0, -41)}}>
              <GoogleInformationWrapper>
                <h3>Salon elizabeth</h3>
                <p>Dąbrówki 222, 37-100 Łańcut</p>
                <DirectionLink href='https://www.google.com/maps/dir//D%C4%85br%C3%B3wki+222,+37-100+D%C4%85br%C3%B3wki/@50.1165579,22.2284136,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x473ce9349567b3e5:0xbd0d3e887ab08380!2m2!1d22.232791!2d50.116558'>
                  (Dojazd do naszego salonu)
                </DirectionLink>
              </GoogleInformationWrapper>
            </InfoWindow>
          </Marker>
      </GoogleMap>
    </GoogleMapWrapper>
  )
}

export default Map;