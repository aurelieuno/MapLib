import React, { Component } from 'react';
import ReactDOM from 'react-dom'


export default class MapContainer4 extends Component {

  // ======================
  // ADD LOCATIONS TO STATE
  // ======================
  state = {
    locations: [
      { name: "New York County Supreme Court", location: { lat: 40.7143033, lng: -74.0036919 } },
      { name: "Queens County Supreme Court", location: { lat: 40.7046946, lng: -73.8091145 } },
      { name: "Kings County Supreme Court", location: { lat: 40.6940226, lng: -73.9890967 } },
      { name: "Richmond County Supreme Court", location: { lat: 40.6412336, lng: -74.0768597 } },
      { name: "Bronx Supreme Court", location: { lat: 40.8262388, lng: -73.9235238 } }
    ]
  }

  componentDidUpdate() {
    console.log('didUpdatemap4')
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const { google } = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign({}, {
        center: { lat: 40.7485722, lng: -74.0068633 }, // sets center of google map to NYC.
        zoom: 11, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      // this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.
      const map = new google.maps.Map(document.getElementById('map2'), {
        center: { lat: 40.7485722, lng: -74.0068633 },
        zoom: 11,
      });

      // ==================
      // ADD MARKERS TO MAP
      // ==================
      this.state.locations.forEach(location => { // iterate through locations saved in state
        const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
          position: { lat: location.location.lat, lng: location.location.lng }, // sets position of marker to specified location
          map: map, // sets markers to appear on the map we just created on line 35
          title: location.name, // the title of the marker is set to the name of the location
          draggable: true,
          animation: google.maps.Animation.DROP,
          icon: {url: "./app/components/lou.PNG"}
        });
        const infowindow = new google.maps.InfoWindow({
          content: `<h3>${location.name}</h3>`
        });
        marker.addListener('click', function () {
          infowindow.open(map, marker);
        });
      })

    

    }
  }

  render() {
    var head = window.document.getElementsByTagName("head")[0];
    console.log(head)

    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '90vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    return ( // in our return function you must return a div with ref='map' and style.
      <div ref="map" id="map2" style={style}>
        loading map...
      </div>
    )
  }
}