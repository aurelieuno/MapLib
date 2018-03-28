import React from 'react'
import ReactDOM from 'react-dom'

import Map, { Marker, GoogleApiWrapper } from '../map-lib'
import { InfoWindow } from '../map-lib/InfoWindow'

const Map6 = React.createClass({
    getInitialState: function () {
        return {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
    },

    onMarkerClick: function (props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    },

    onInfoWindowClose: function () {
        console.log('closed')
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })
    },

    onMapClicked: function (props) {
        console.log('props map 6',props)
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    },

    render: function () {
        if (!this.props.loaded) {
            return <div>Loading...</div>
        }

        return (
            <Map google={this.props.google}
                style={{ width: '100%', height: '100%', position: 'relative' }}
                className={'map'}
                zoom={14}
                center={{ lat: 37.759703, lng: -122.428093 }}
                onClick={this.onMapClicked}>
                <Marker
                    onClick={this.onMarkerClick}
                    name={'SOMA'}
                    position={{ lat: 37.778519, lng: -122.405640 }} />
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Dolores park'}
                    position={{ lat: 37.759703, lng: -122.428093 }}
                />
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
});


export default GoogleApiWrapper({
    apiKey: 'AIzaSyDxBUGwd5pLLXciCWvYmdi63XQ9-HdAKrs',
})(Map6)
// const mountNode = document.querySelector('#root')
// ReactDOM.render(<Wrapped />, mountNode)
