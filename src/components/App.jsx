import React from 'react';
import Home from '../containers/home';

var App = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div className='app'>
        <p>Deck Saver</p>
        <div className='home'>
          <Home />
        </div>
      </div>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default App;
