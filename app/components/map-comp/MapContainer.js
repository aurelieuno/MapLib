import React, { Component } from 'react'
import Marker from './Marker'
import InfoWindow from './InfoWindow'
import MapComponent from './MapComponent'
// import Lipsum from '../awesome-possum/lib/Lipsum'
import {MAP_API_KEY} from '../../config'

export default class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    selectedPlace: {},
    activeMarker: {},
  }

  onMapClicked = (props, map, e) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 }

  render() {
    return (
      <div>
        <h1> Google Maps Component </h1>
        <MapComponent
          apiKey={MAP_API_KEY}
          zoom={12}
          center={{ lat: 40.7485722, lng: -74.0068633 }}
          addressCenter={'2823 Ursulines Avenue, New Orleans, LA'}
          style={{ 
             width: '75vw', // 90vw basically means take up 90% of the width screen. px also works.
             height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
          }}
          onClick={this.onMapClicked}
        >
          <Marker
            position={{ lat: 40.7143033, lng: -74.0036919 }}
            name={'Museum'}
            icon= {{'url': "./app/components/map-app/lou.PNG"}}
            onClick={this.onMarkerClick}
          />
          <Marker
            position={{ lat: 40.7243033, lng: -74.0136919 }}
            name={'Aqua'}
            onClick={this.onMarkerClick}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            content={
              `<div>
              <p>${this.state.selectedPlace.name}</p>
              </div>`
            }/>
          <Lipsum />
          </MapComponent>
          <Lipsum />
      </div>
    );
  }
}



