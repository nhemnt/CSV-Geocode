import React, { Component } from "react";
import GoogleMaps from "google-maps";
import { googleApiKey }  from '../../../../constant/config'
GoogleMaps.KEY = googleApiKey;
GoogleMaps.VERSION = "3.34";

class Markers extends Component {
  constructor() {
    super();
    this.google = null;
    this.geocoder = null;
    this.geocodedJSON = [];
    
    this.map = null
    this.bounds = null
    this.google = null
    this.infowindow = null
    this.markers = {}
    this.renderers = {}
    this.directionsService = null
    this.delayFactor = 0
    this.canvas = React.createRef()
    this.styles = {
      default: null,
      hide: [
        {
          featureType: 'poi',
          stylers: [{visibility: 'off'}]
        },
        {
          featureType: 'transit',
          elementType: 'labels.icon',
          stylers: [{visibility: 'off'}]
        }
      ]
    }

    this.state = {
     
    }
    this.setMapBounds = this.setMapBounds.bind(this)
    this.renderMarker = this.renderMarker.bind(this)

  }
  componentDidMount() {
    GoogleMaps.load(google => this.init(google));
  }
  init(google) {
    this.google = google
    this.map = new this.google.maps.Map(this.canvas.current)
    this.bounds = new this.google.maps.LatLngBounds()
    this.directionsService = new this.google.maps.DirectionsService()
    this.infowindow = new this.google.maps.InfoWindow();
    this.map.setOptions({ styles: this.styles['hide'] });
    this.createMakerIcon()
    this.setMapBounds()
    this.renderMarker()
  }
  createMakerIcon(){
    this.defaultIcon = {
      url: '../../../assets/images/defaultMarker.png',
      scaledSize: new google.maps.Size(35, 35),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(0, 0)
    }
  }
  setMapBounds() {
    this.props.geocodedData
      .map(data => { 
        const location= {
          lat : parseFloat(data.lat),
          lng: parseFloat(data.lon)
        }
        this.bounds.extend(location)
      })
  }
  renderMarker() { 
    this.props.geocodedData
    .map((data,i) => {
        const setMarker = (location ) => {
            const marker = new this.google.maps.Marker({
                position: location,
                map: this.map,
                icon: this.defaultIcon,
            })
        this.markers[`marker-${i}`] = { marker }
        }
        const location= {
          lat : parseFloat(data.lat),
          lng : parseFloat(data.lon)
        }
        setMarker(location)
    })
    Object.values(this.markers).map(marker => marker.marker.setMap(this.map));
    this.map.fitBounds(this.bounds)
  }
  render() {
    return (
      <div>
        <div className="map_markers" ref={this.canvas} />  
      </div>
    );
  }
}
export default Markers;
