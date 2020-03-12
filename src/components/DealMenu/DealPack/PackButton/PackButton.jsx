import React, { Component } from 'react'
import './PackButton.scss'

export default class PackButton extends Component {
    render() {
        return (
            <button className={`PackButton ${this.props.top}`} >
                רכישת מנוי {this.props.periodName}
            </button>
        )
    }
}
