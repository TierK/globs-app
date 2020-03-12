import React, { Component } from 'react';
import './Main.scss';

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
          <div className="container">
            <div>גלובס. למילים יש ערך.</div>
            <img src="https://images.globes.co.il/globes/paywall/birdWoman.png" alt="Working woman" />
          </div>
      </div>
    )
  }
}
