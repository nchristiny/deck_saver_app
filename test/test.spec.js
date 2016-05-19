import App from '../src/components/App.jsx';
import Home from '../src/pages/home.js';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

var component;
var spy = sinon.spy();

describe('Given an instance of the App', () => {
  describe('when we render the component', () => {
    before(() => {
      component = TestUtils.renderIntoDocument(<App onRender={ spy } />);
    });
    it('should render header 1 element', () => {
      var h1 = TestUtils.scryRenderedDOMComponentsWithTag(component, 'h1');

      expect(h1).to.have.length.above(0, 'Expected to have element with tag <h1>');
      expect(spy).to.be.calledOnce;
    });
  });
});

describe('Given an instance of Home', () => {
  describe('when we render the component', () => {
    before(() => {
      component = TestUtils.renderIntoDocument(<Home onRender={ spy } />);
    });
    it('should render a paragraph', () => {
      var paragraph = TestUtils.scryRenderedDOMComponentsWithTag(component, 'p');

      expect(paragraph).to.have.length.above(0, 'Expected to have element with tag <p>');
      expect(spy).to.be.calledOnce;
    });
  });
});
