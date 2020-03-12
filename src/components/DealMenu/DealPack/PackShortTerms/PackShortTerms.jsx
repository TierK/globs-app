import React, { Component } from 'react'
import './PackShortTerms.scss'

export default class PackShortTerms extends Component {
  render() {
    return (
      <div>
        <p>*אחר כך {this.props.postPrice} {this.props.postPeriod}</p>
        <strong>ניתן לבטל בכל עת</strong>
      </div>
    )
  }
}
