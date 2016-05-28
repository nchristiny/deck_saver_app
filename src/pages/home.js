import React, { Component } from 'react';
import Card from '../components/card';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h2>Home Page</h2>
        <Card />
      </div>
      );
  }
}
