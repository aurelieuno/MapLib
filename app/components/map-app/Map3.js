import React, { Component } from 'react';
// import the Google Maps API Wrapper from google-maps-react
import { wrapper } from '../map-lib/GoogleAPIComponent'
// import child component
import MapContainer3 from './MapContainer3'
import Map3Component from './Map3Component'
// import Lipsum from '../awesome-possum/lib/Lipsum'


class Map3 extends Component {
  render() {
    return (
      <div>
        <h1> Google Maps API + React </h1> 
        <Map3Component google={this.props.google} zoom={12} center={{ lat: 40.7485722, lng: -74.0068633 }}>
        <Lipsum/>
        </Map3Component>  
      </div>
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the Map3 component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default wrapper({
  apiKey: 'AIzaSyDxBUGwd5pLLXciCWvYmdi63XQ9-HdAKrs',
})(Map3)


