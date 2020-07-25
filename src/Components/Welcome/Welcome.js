import React, { Component } from 'react';
import './Welcome.css'

export class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    }
  }

  render() {
    return (
      <head>
        <h1>Welcome!</h1>
        <h3>Are you ready for Jeopardy?!</h3>
      </head>
    )
  }
}