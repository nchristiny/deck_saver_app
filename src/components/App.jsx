import React from 'react';

var App = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div>
        <h1>Deck Saver</h1>
        <p>Choose class!</p>
      </div>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default App;
