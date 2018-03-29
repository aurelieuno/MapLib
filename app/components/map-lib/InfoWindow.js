import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

export class InfoWindow extends React.Component {

  componentDidMount() {
    // this.renderInfoWindow();
  }

  componentDidUpdate(prevProps) {
    const { google, map } = this.props;

    if (!google || !map) {
      return;
    }

    if (map !== prevProps.map) {
      console.log('renderInfoWindow maps');
      this.renderInfoWindow();
    }

    // if (this.props.position !== prevProps.position) {
    //   this.updatePosition();
    // }

    if (this.props.children !== prevProps.children) {
      console.log('updateContent')
      this.updateContent();
    }

    // if ((this.props.visible !== prevProps.visible ||
    if ((this.props.marker !== prevProps.marker)){//always true
        console.log('marker',this.props.marker === prevProps.marker);
        console.log('prev.marker',prevProps.marker);
        console.log('props.marker',this.props.marker);
      // this.props.position !== prevProps.position)) {
      this.props.visible ?
        this.openWindow() :
        this.closeWindow();
    }
  }

  renderInfoWindow() {
    let { map, google, mapCenter } = this.props;

    if (!google || !google.maps) {
      return;
    }

    const iw = this.infowindow = new google.maps.InfoWindow({
      content: ''
    });
    console.log('infowindowfunc', this.infowindow)

    // google.maps.event
    //   .addListener(iw, 'closeclick', this.onClose.bind(this))
    // google.maps.event
    //   .addListener(iw, 'domready', this.onOpen.bind(this));
  }

  // onOpen() {
  //   if (this.props.onOpen) {
  //     this.props.onOpen();
  //   }
  // }

  // onClose() {
  //   if (this.props.onClose) {
  //     console.log('clooooosed')
  //     this.props.onClose();
  //   }
  // }

  openWindow() {
    console.log('openWindow', this.infowindow)
    this.infowindow.open(this.props.map, this.props.marker);
  }

  // updatePosition() {
  //   let pos = this.props.position;
  //   if (!(pos instanceof google.maps.LatLng)) {
  //     pos = pos && new google.maps.LatLng(pos.lat, pos.lng);
  //   }
  //   this.infowindow.setPosition(pos);
  // }

  updateContent() {
    const content = this.renderChildren();
    // console.log(content)
    this.infowindow.setContent(content);
  }

  closeWindow() {
    console.log('closeWindow')
    this.infowindow.close();
  }

  renderChildren() {
    const { children } = this.props;
    return ReactDOMServer.renderToString(children);
  }

  render() {
    return null;
  }
}

InfoWindow.propTypes = {
  children: PropTypes.element.isRequired,
  map: PropTypes.object,
  marker: PropTypes.object,
  position: PropTypes.object,
  visible: PropTypes.bool,

  // callbacks
  onClose: PropTypes.func,
  onOpen: PropTypes.func
}

InfoWindow.defaultProps = {
  visible: false
}

export default InfoWindow
