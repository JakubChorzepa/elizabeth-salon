import React from 'react'
import { GoogleMap } from '@react-google-maps/api';
import styled from 'styled-components';

const GoogleMapWrapper = styled.div`
  margin: 10px 0;
  height: 50vh;
  width: 90%;

  .map-container {
    width: 100%;
    height: 100%;
  }
`


const Map = () => {
  return (
    <GoogleMapWrapper>
      <GoogleMap 
        zoom={10} 
        center={{lat: 50.11668869220128, lng: 22.232790998468637}}
        mapContainerClassName='map-container'
      >
      </GoogleMap>
    </GoogleMapWrapper>
  )
}

export default Map;