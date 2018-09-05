import React, { Component } from 'react'
import GoogleMapReact, {SimpleMarker}  from 'google-map-react'
const AnyReactComponent = ({ text }) => <div>{ text }</div>;
class Map extends Component {
  static defaultProps = {
    center: { lat: 37.276669, lng: -107.877567 },
    zoom: 16
  }
render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{
              key: process.env.GOOGLE_API_KEY
            }
          }
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <SimpleMarker />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;