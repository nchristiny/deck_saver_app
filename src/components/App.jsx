import React, { Component } from 'react';
import Search from './search';

export default class App extends Component {
  render() {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div className='app'>
        <h1>Deck Saver</h1>
        <Search />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  onRender: React.PropTypes.func,
  children: React.PropTypes.node
};
