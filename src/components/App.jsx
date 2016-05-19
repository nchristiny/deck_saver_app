import React from 'react';
import Home from '../pages/home';

var App = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div className='app'>
        <h1>Deck Saver</h1>
          <Home />
      </div>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default App;
