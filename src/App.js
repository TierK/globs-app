import React, {Component} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Description from './components/Description/Description';
import DealMenu from './components/DealMenu/DealMenu';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: 0 };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    this.setState({ windowWidth });
  }

render() {
  const { windowWidth } = this.state;
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Description/>
        <DealMenu/>
    </div>
  );
}
}
