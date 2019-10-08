import React, { Component } from 'react';
import axios from 'axios';
// import * as firebase from 'firebase';
import firestore from './firebaseConfig';

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      student_number: '',
      adress: '',
      website: '',
      student_ID: ''
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addUser = e => {
    e.preventDefault();
    const db = firestore.firestore();
    // db.settings({
    //   timestampsInSnapshots: true
    // });
    const userRef = db.collection('student').add({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      student_number: this.state.student_number,
      adress: this.state.adress,
      website: this.state.website
      // student_ID: this.state.student_ID
    });  
    this.setState({
      first_name: '',
      last_name: '',
      student_number: '',
      adress: '',
      website: '',
      student_ID: ''
    });
  };

  render() {
    return (
        <div className="studentRegForm">
          <form onSubmit={this.addUser}>
            <label>First Name </label>
            <input  type="text"
                    name="first_name"
                    className="form-control"
                    value={this.state.first_name}
                    onChange={this.updateInput}
            />
            <label>Last Name </label>
            <input  type="text"
                    name="last_name"
                    className="form-control"
                    value={this.state.last_name}
                    onChange={this.updateInput}
            />                          
            <label>Student Number </label>
            <input  type="text"
                    name="student_number"
                    className="form-control"
                    value={this.state.student_number}
                    onChange={this.updateInput}
            />  
            <label>Adress </label>
            <input  type="text"
                    name="adress"
                    className="form-control"
                    value={this.state.adress}
                    onChange={this.updateInput}
            />
            <label>Website </label>
            <input  type="text"
                    name="website"
                    className="form-control"
                    value={this.state.website}
                    onChange={this.updateInput}
            />                             
            <button type="submit">Submit</button>
          </form>
        </div>
        );
  }   
}