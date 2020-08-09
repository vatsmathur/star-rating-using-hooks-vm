import React, { Component } from 'react';
import { render } from 'react-dom';
import RatingWidget from './RatingWidget';
import './style.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <RatingWidget />
        <p>
          Rate and Shine!
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
