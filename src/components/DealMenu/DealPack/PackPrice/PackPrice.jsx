import React, { Component } from 'react';
import './PackPrice.scss'

export default class PackPrice extends Component {
    render() {
        return (
            <div className="PackPrice">
                <span className="price">{this.props.price}</span> 
               ₪ 
               <span className="period">{this.props.period}</span>
            </div>
        )
    }
}
