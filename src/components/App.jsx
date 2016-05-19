import React from 'react';

var App = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div className='app'>
        <h1>Deck Saver</h1>
        {this.props.children}
      </div>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func,
    children: React.PropTypes.node
  }
});

export default App;
