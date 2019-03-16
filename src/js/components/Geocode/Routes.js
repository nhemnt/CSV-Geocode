import React, { Component } from "react";
import GoogleMaps from "google-maps";
import cloneDeep from 'lodash/cloneDeep';
import ReactDOMServer from "react-dom/server";
import { googleApiKey }  from '../../../../constant/config'
GoogleMaps.KEY = googleApiKey;
GoogleMaps.VERSION = "3.34";

const color= ''

class Routes extends Component {
  constructor() {
    super();

    this.defaultIcon = null
    this.map = null
    this.bounds = null
    this.google = null
    this.infowindow = null
    this.markers = {}
    this.renderers = {}
    this.directionsService = null
    this.delayFactor = 0
    this.driverMarker={}

    this.routeCanvas = React.createRef()
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
    this.map = new this.google.maps.Map(this.routeCanvas.current,{
      zoom: 11,
      center: {lat: 28.6672, lng:77.1117}
    })
    this.bounds = new this.google.maps.LatLngBounds()
    this.directionsService = new this.google.maps.DirectionsService()
    this.infowindow = new this.google.maps.InfoWindow();
    this.map.setOptions({ styles: this.styles['hide'] });
    this.createMakerIcon()
    // this.setMapBounds()
    // this.renderMarker()
    this.renderRoutes()
  }
  createMakerIcon(){
    this.defaultIcon = {
      url: '../../../assets/images/routeMarker.png',
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
  renderRoutes() { 
    let data = this.props.geocodedData
    let copy = cloneDeep(data)
    for (let i = 0; i < data.length; i += 24) {
      copy.addresses = data.slice(i==0 ? i :i-1, i+24)
      if (copy.length > 0) this.renderRoute(copy,i)
    }
  }
  renderRoute(data, currentIndex) {
    const addresses = data.slice(0)
    const origin = data.shift()
    const destination = data.pop() || origin

    const request = {
      origin: this.getLatLng(origin),
      destination: this.getLatLng(destination),
      optimizeWaypoints : true,
      waypoints: addresses
        .slice(0, 23)
        .map(address => ({ location: this.getLatLng(address) })),
      travelMode: 'DRIVING',
    }
    this.setMapBounds(request)

    const renderer =  this.renderers["route-"+currentIndex] ||  new this.google.maps.DirectionsRenderer({ suppressMarkers: true })
    renderer.setMap(this.map)
    renderer.setOptions(this.getRendererOptions( color ))

    this.renderers["route-"+currentIndex] = renderer
    this.drawRoute(request, renderer, currentIndex);
  }
  getLatLng({ lat, lon }) {
    return new this.google.maps.LatLng(lat, lon)
  }
  setMapBounds({ origin, destination, waypoints = [] }) {
    this.bounds.extend(origin)
    this.bounds.extend(destination)
    waypoints.forEach(({ location }) => this.bounds.extend(location))
  }
  getRendererOptions(color) {
    return {
      preserveViewport: true,
      markerOptions: {
        icon: this.defaultIcon,
        // label: this.getLabel({ color, text: '1' }),
      },
      polylineOptions: {
        strokeColor: color,
        strokeWeight: 4,
      }
    }
  }
  drawRoute(request, renderer, currentIndex) {
    this.directionsService.route(request, (response, status) => {
      let that = this;
      if (status === 'OK') {
        renderer.setDirections(response)
        this.setMarkers(response.request,  currentIndex, response.routes)
      } else if (status === google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
            this.delayFactor++;
      }else {
        console.log(`Directions request failed due to ${status}`)
      }
    })
  }
  setMarkers({ origin, destination, waypoints = [] }, currentIndex, routes) {
    let that =this;
    const setMarker = ({ location }, { text, currentIndex }, route= '') => {
      const marker = new this.google.maps.Marker({
        position: location,
        map: this.map,
        icon: this.defaultIcon
      })

      // let distanceAccToGoogle = route === '' ? 0 : route.distance.text.split(" ")[1]== 'm'? Number(route.distance.text.split(" ")[0])/1000: Number(route.distance.text.split(" ")[0])
      // let timeAccToGoogle = route === '' ? 0 : route.duration.value
      
      // var html = ReactDOMServer.renderToString(<TimelineModal
      //   num = {text}
      //   // address={ship.delivery_address}
      //   time={route === '' ? 'NAN' : route.duration.text}
      //   distance={route === '' ? 'NAN' : route.distance.text}
      // />)

      marker.addListener('click', function() {
        that.infowindow.setContent(html)
        that.infowindow.open(that.map, marker);
      });
      this.markers[`marker-${currentIndex}`] = { marker }
    }

    setMarker(origin, {  text: (currentIndex+1).toString(), currentIndex })
    setMarker(destination, { text: (currentIndex + waypoints.length + 2).toString(), currentIndex }, routes[0].legs[routes[0].legs.length-1])
    waypoints.forEach(({ location }, i) => {
      setMarker(location, { text: (currentIndex + i + 2).toString(), currentIndex }, routes[0].legs[i])
    })
  }
  render() {
    return (
      <div>
        <div className="map_markers" ref={this.routeCanvas} />  
      </div>
    );
  }
}
export default Routes;
