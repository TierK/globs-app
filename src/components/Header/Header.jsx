import React, { Component } from 'react';
import './Header.scss'; 

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winWidth: 0,
            srcLink: ''
        };
        this.getWindowSize = this.getWindowSize.bind(this);
        this.changeLogo = this.changeLogo.bind(this);
    }

    componentDidMount() {
        this.getWindowSize();
        this.getLogo();
        window.addEventListener('resize', this.changeLogo);
        
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.changeLogo);
      }
      
      getWindowSize() {
        this.setState({ winWidth: window.innerWidth});
      }

      getLogo() {
        this.setState({srcLink: (this.state.winWidth <= 500 ?
             'https://images.globes.co.il/images/site/top50/logo-gimel.svg' :
         'https://images.globes.co.il/globes/logo-138-35-1.svg')});
    }

    changeLogo() {
        this.getWindowSize();
        this.getLogo();
    }
    
    render() {
        return (
            <div className="Header">
                <img src={this.state.srcLink} alt="logo"/>
                <sub>צרו איתנו קשר: 5855*</sub>
            </div>
        )
    }
}

