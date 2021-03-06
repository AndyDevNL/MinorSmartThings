import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import * as firebase from 'firebase';
import firestore from './firebaseConfig';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import './weathermap.scss';

var element;

export default class Homestations extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        let weathermapState = this;

        /* Firestore  */
        // const db = firestore.firestore();

        // db.collection('sensordata')
        // .onSnapshot(function(querySnapshot) {
        //   var sensorDataList = [];
        //   querySnapshot.forEach(function(doc) {
        //     sensorDataList.push(doc.data());
        //     weathermapState.setState({sensor_data: sensorDataList});
        //   });
        // });

        // db.collection('student')
        // .onSnapshot(function(querySnapshot) {
        //   var studentList = [];
        //   querySnapshot.forEach(function(doc) {
        //     studentList.push(doc.data());
        //     weathermapState.setState({students: studentList});
        //   });
        // });

        /*RealTime Firebase*/
        firebase.database().ref().on('value', function (snapshot) {
            var snapData = snapshot.val();
            var arr = [];
            for (var key in snapData) {
                arr.push(snapData[key]);
            }
            weathermapState.setState({data: arr});
        });
    }

    RenderMap() {
        const Weathermap = withScriptjs(withGoogleMap((props) =>
            <GoogleMap defaultZoom={8}
                       ref={props.onMapLoad}
                       defaultCenter={{lat: 52.086071, lng: 4.883930}}
            >
                {
                    this.state.data.map(marker => {
                            if (marker['meta-data']) {
                                return (
                                    <Marker onClick={this.onMarkerClick.bind(this, marker)} position={{
                                        lat: marker['meta-data']['latitude'],
                                        lng: marker['meta-data']['longitude']
                                    }}>
                                        <div className={'marker hidden'}
                                             id={'marker-' + marker['student-data']['student-number']}>
                                            <h1> {marker['student-data']['student-number']} </h1>
                                            <p>Temperature: {marker['sensor-data']['temperature']}</p>
                                            <p>Humidity: {marker['sensor-data']['humidity']}</p>
                                            <p>Windspeed: {marker['sensor-data']['windspeed']}</p>
                                            <span onClick={this.closeMarker.bind(this, marker)} id={'close'}>
                                                x
                                            </span>
                                        </div>
                                    </Marker>
                                );
                            }
                        }
                    )
                }
            </GoogleMap>
        ));

        return (
            <Weathermap
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `400px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            >
            </Weathermap>
        )
    }

    onMarkerClick = (marker) => {
        if (element == null) {
            element = document.getElementById('marker-' + marker['student-data']['student-number']);
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
            element = document.getElementById('marker-' + marker['student-data']['student-number']);
            element.classList.remove("hidden");
        }

    };

    closeMarker = (marker) => {
        console.log('clicked');
        if (element != null) {
            console.log('in here');
            console.log(element);
            element.classList.add("hidden");
        }
    };
    // <td>
    //   <a href={student['student-data']['website']} > {student['student-data']['website']} </a>
    // </td>

    StudentList() {
        return this.state.data.map(student => {
            if (student['student-data']) {
                return (
                    <tr className={student['student-number']}>
                        <td>
                            {student['student-data']['first-name']}
                        </td>
                        <td>
                            {student['student-data']['student-number']}
                        </td>
                    </tr>
                )
            }
        });
    }

    MarkerList() {
        return this.state.data.map(sensor => {
            if (sensor['student-data'] && sensor['sensor-data'] && sensor['meta-data']) {
                return (
                    <tr>
                        <td>{sensor['student-data']['student-number']}</td>
                        <td>{sensor['sensor-data']['temperature']}</td>
                        <td>{sensor['sensor-data']['humidity']}</td>
                        <td>{sensor['sensor-data']['windspeed']}</td>
                        <td>{sensor['meta-data']['longitude']} / {sensor['meta-data']['latitude']}</td>
                    </tr>
                )
            }
        });
    }

    render() {
        return (
            <div>

                <div className="weathermap" style={{width: "1000px", height: "500px"}}>
                    <h3>
                        Weathermap
                    </h3>
                    {this.RenderMap()}
                </div>

                <div className="homestations">
                    <h3>Homestations</h3>
                    <table className="table table-striped" style={{marginTop: 20}}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Student number</th>
                            <th>Website</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.StudentList()}
                        </tbody>
                    </table>
                </div>

                <div className="Markers">
                    <h3>Markers</h3>
                    <table className="table table-striped" style={{marginTop: 20}}>
                        <thead>
                        <tr>
                            <th>Student Number</th>
                            <th>Temperature</th>
                            <th>Humidity</th>
                            <th>Windspeed</th>
                            <th>long/lat</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.MarkerList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

