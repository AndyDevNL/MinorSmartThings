import React, { Component } from 'react';
import axios from 'axios';
import Firebase from 'firebase';
// import config from '../config';

export default class CreateHS extends Component {
      constructor(props) {
        super(props);
        this.setStudentFirstName = this.setStudentFirstName.bind(this);
        this.setStudentLastName = this.setStudentLastName.bind(this);
        this.setStudentNumber = this.setStudentNumber.bind(this);
        this.setStudentAdress = this.setStudentAdress.bind(this);
        this.setStudentWebsite = this.setStudentWebsite.bind(this);
        this.setMetadataLong = this.setMetadataLong.bind(this);
        this.setMetadataLat = this.setMetadataLat.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
              student: {
                firstName: '',
                lastName: '',
                number: '',
                adress: '',
                website: ''
              },
              sensors: {
                  humidity: {
                    sensorType: '',
                    value: ''
                  },
                  temperature: {
                    sensorType: '',
                    value: ''
                  },
                  windspeed: {
                    sensorType: '',
                    value: ''
                  },
                  uniqueSensor: {
                    sensorType: '',
                    sensorName: '',
                    sensorData: ''
                  }
              },
              metadata: {
                date: '',
                time: '',
                longitude: '',
                latitude: ''
              }
        }
    }

    setStudentFirstName(e) {
      this.setState({
            student: {
              firstName: e.target.value,
              lastName: this.state.student.lastName,
              number: this.state.student.number,
              adress: this.state.student.adress,
              website: this.state.student.website  
            }
      });
    }

    setStudentLastName(e) {
      this.setState({
            student: {  
              firstName: this.state.student.firstName,
              lastName: e.target.value,
              number: this.state.student.number,
              adress: this.state.student.adress,
              website: this.state.student.website  
            }
      });
    }

    setStudentNumber(e) {
      this.setState({
            student: { 
              firstName: this.state.student.firstName,
              lastName: this.state.student.lastName,
              number: e.target.value,
              adress: this.state.student.adress,
              website: this.state.student.website  
            }
      });
    }

    setStudentAdress(e) {
      this.setState({
            student: {
              firstName: this.state.student.firstName,
              lastName: this.state.student.lastName,
              number: this.state.student.number,
              adress: e.target.value,
              website: this.state.student.website  
            }
      });
    }

    setStudentWebsite(e) {
      this.setState({
            student: {
              firstName: this.state.student.firstName,
              lastName: this.state.student.lastName,
              number: this.state.student.number,
              adress: this.state.student.adress,
              website: e.target.value 
            }
      });
    }

    setMetadata(date, time, long, lat) {
      this.setState({
        metadata: {
          date: date,
          time: time,
          longitude: long,
          latitude: lat
        }
      });
    }

    setMetadataLong(long) {
      this.setState({
        metadata: {
          date: '',
          time: '',
          longitude: long.target.value,
          latitude: this.state.metadata.latitude
        }
      });
    }

      setMetadataLat(lat) {
      this.setState({
        metadata: {
          date: '',
          time: '',
          longitude: this.state.metadata.longitude,
          latitude: lat.target.value
        }
      });
    }
    // setSensorData(e) {
    //   this.setState({})
    // }

    // setMetadata(e) {
    //   this.setState({})
    // }

    onSubmit(e) {
      e.preventDefault();
      
      console.log(`Form submitted:`);
      console.log(`Student name: ${this.state.student.firstName} ${this.state.student.lastName}`);
      console.log(`Student Number: ${this.state.student.number}`);
      console.log(`Adress: ${this.state.student.adress}`);
      console.log(`Website: ${this.state.student.website}`);
      console.log(`Long: ${this.state.metadata.longitude} - Lat: ${this.state.metadata.latitude}`);

      const newHS = {
        student: {
          firstName: this.state.student.firstName,
          lastName: this.state.student.lastName,
          number: this.state.student.number,
          adress: this.state.student.adress,
          website: this.state.student.website
        },
        sensors: {
                  humidity: {
                    sensorType: '',
                    value: ''
                  },
                  temperature: {
                    sensorType: '',
                    value: ''
                  },
                  windspeed: {
                    sensorType: '',
                    value: ''
                  },
                  uniqueSensor: {
                    sensorType: '',
                    sensorName: '',
                    sensorData: ''
                  }
        },
        metadata: {
          date: '',
          time: '',
          longitude: this.state.metadata.longitude,
          latitude: this.state.metadata.latitude
        }
      };
      
      axios.post('http://localhost:4000/weathermap/add', newHS)
          .then(res => console.log(res.data));      
      
        this.setState({
              student: {
                firstName: '',
                lastName: '',
                number: '',
                adress: '',
                website: ''
              },
              sensors: {
                  humidity: {
                    sensorType: '',
                    value: ''
                  },
                  temperature: {
                    sensorType: '',
                    value: ''
                  },
                  windspeed: {
                    sensorType: '',
                    value: ''
                  },
                  uniqueSensor: {
                    sensorType: '',
                    sensorName: '',
                    sensorData: ''
                  }
              },
              metadata: {
                date: '',
                time: '',
                longitude: '',
                latitude: ''
              }
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create Homestation</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>First Name </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student.firstName}
                                onChange={this.setStudentFirstName}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Last Name </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student.lastName}
                                onChange={this.setStudentLastName}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Student Number </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student.number}
                                onChange={this.setStudentNumber}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Adress </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student.adress}
                                onChange={this.setStudentAdress}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Website </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student.website}
                                onChange={this.setStudentWebsite}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Longitude </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.metadata.longitude}
                                onChange={this.setMetadataLong}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Latitude</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.metadata.latitude}
                                onChange={this.setMetadataLat}
                                />
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Create Homestation" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}