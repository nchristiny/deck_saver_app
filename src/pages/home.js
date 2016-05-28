import React, { Component } from 'react';
import Cards from '../components/cards';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h2>Home Page</h2>
        <Cards />
      </div>
      );
  }
}
