import React, { Component } from "react";
import GoogleMaps from "google-maps";
import {CSVLink} from 'react-csv';
import { googleApiKey } from '../../../../constant/config'
import Markers from './Markers'
import Routes from './Routes'

GoogleMaps.KEY = googleApiKey;
GoogleMaps.VERSION = "3.34";

class Geocode extends Component {
  constructor() {
    super();
    this.google = null;
    this.geocoder = null;
    this.geocodedJSON = [];

    this.state = {
      jsonFile: null,
      csvData: null,
      csvKeys: null,
      checkedItems: new Map(),
      isFileGeocoded: false,
      isGeocoding: false,
    }
    this.uploadFile = this.uploadFile.bind(this);
    this.convertJson = this.convertJson.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.geocodeAddresses = this.geocodeAddresses.bind(this);
    this.geocodeAddress = this.geocodeAddress.bind(this);
  }
  componentDidMount() {
    GoogleMaps.load(google => this.init(google));
  }
  init(google) {
    this.google = google;
    this.geocoder = new this.google.maps.Geocoder();
    // this.geocodeAddresses();
  }
  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }
  geocodeAddresses() {
    let locations = this.state.jsonFile
    let columns = Array.from(this.state.checkedItems).filter(a => a[1] == true)
    locations.map((location,i) => {
      this.geocodeAddress(location,columns,i);
    })
  }

  geocodeAddress(location, columns,i) {
    let address = ''
    columns.map(a => { 
      address = address + location[a[0]] + " "
    })
    
    this.geocoder.geocode({ address }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        
        location["lat"] = results[0].geometry.location.lat().toFixed(4)
        location["lon"] = results[0].geometry.location.lng().toFixed(4)
        this.geocodedJSON.push(location);
        if (this.state.jsonFile.length-1 === i) { 
          this.setState({isFileGeocoded:true})
        }
      } else {
        alert("some problem in geocode" + status);
      }
    });
  }
  uploadFile(evt) {
    // var that = this
    let isCompatible = false;
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      isCompatible = true;
    }
    if (!isCompatible) {
      alert("The File APIs are not fully supported in this browser!");
    } else {
      let file = evt.target.files[0];
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = event => {
        let csvData = event.target.result;
        this.setState({ csvData })
      };
      reader.onerror = function() {
        alert("Unable to read " + file.fileName);
      };
    }
  }
  CSVToArray(strData, strDelimiter) {
    strDelimiter = strDelimiter || ",";
    let objPattern = new RegExp(
      "(\\" +
        strDelimiter +
        "|\\r?\\n|\\r|^)" +
        '(?:"([^"]*(?:""[^"]*)*)"|' +
        '([^"\\' +
        strDelimiter +
        "\\r\\n]*))",
      "gi"
    );
    let arrData = [[]];
    let arrMatches = null;
    while ((arrMatches = objPattern.exec(strData))) {
      let strMatchedDelimiter = arrMatches[1];
      if (strMatchedDelimiter.length && strMatchedDelimiter != strDelimiter) {
        arrData.push([]);
      }
      if (arrMatches[2]) {
        var strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
      } else {
        var strMatchedValue = arrMatches[3];
      }
      arrData[arrData.length - 1].push(strMatchedValue);
    }
    return arrData;
  }

  CSV2JSON(csv) {
    let array = this.CSVToArray(csv);
    let objArray = [];
    for (let i = 1; i < array.length; i++) {
      objArray[i - 1] = {};
      for (let k = 0; k < array[0].length && k < array[i].length; k++) {
        let key = array[0][k];
        objArray[i - 1][key] = array[i][k];
      }
    }
    return objArray;
    //stringify json to array
    // let json = JSON.stringify(objArray);
    // let str = json.replace(/},/g, "},\r\n");

    // return str;
  }
  convertJson() { 
    this.geocodedJSON = [];
    this.setState({isFileGeocoded:false})
    let csvKeys
    let jsonFile = this.CSV2JSON(this.state.csvData);
    if (jsonFile.length > 0) {
      csvKeys = Object.keys(jsonFile[0])
    }
    this.setState({ jsonFile, csvKeys })
  }
 
  render() {
    return (
      <div>
        <div style={{marginBottom: '20px'}}>
        <input
          type="file"
          name="File Upload"
          id="txtFileUpload"
          accept=".csv"
          onChange={this.uploadFile}
        />
          <button onClick={this.convertJson}>convert to json</button>
        </div>
        <div >
          {this.state.jsonFile ? 
            <div style={{padding:'20px', background: '#f1f1c7'}}>
            <div style={{height: '500px',width: '97%',overflow: 'scroll',padding: '20px',margin: 'auto',border: '1px solid #bfbfbf',boxShadow: '0 1px 10px rgba(0, 0, 0, .04), 0 1px 10px rgba(0, 0, 0, .04)',background: '#f1f1c7'}}>
              <p>{JSON.stringify(this.state.jsonFile)}</p>
              </div>
              </div>
            :
            null
          }
        </div>
        <div className="label-div">
          {this.state.csvKeys ?
            this.state.csvKeys.map(item => (
              <label key={item} style={{padding: '5px',border: '1px solid #000',margin: '5px'}}>
                {item}
                <input style={{marginLeft:'4px'}} type='checkbox' name={item} checked={this.state.checkedItems.get(item)?this.state.checkedItems.get(item): ''} onChange={this.handleChange} />
            </label>
            ))
            :
            null
          }
        </div>
        <div>
        example- 
          {Array.from(this.state.checkedItems).map((column,i)=> {
            return (
              <span key={i} className="mr-2">
                {column[1] ? this.state.jsonFile[0][column[0]] : null}   
            </span>
            )   
          })}
        </div>
        <button onClick={this.geocodeAddresses}>Geocode CSV</button>
        {this.state.isFileGeocoded ? <div><i className="fa fa-download"></i><CSVLink filename="csvWithLatLon.csv" data={this.geocodedJSON} >EXPORT FILE</CSVLink></div> : null}
        {this.state.isFileGeocoded ?
          <div className="row">
            <div className="col-md-6">
            <Markers geocodedData={this.geocodedJSON} />
            </div>
            <div className="col-md-6">
            <Routes geocodedData={this.geocodedJSON} />
            </div>
          </div>
          : null}
      </div>
    );
  }
}
export default Geocode;
