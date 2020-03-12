import React, { Component } from 'react'
import './PackDetails.scss';

export default class PackDetails extends Component {
  render() {
    return (
      <ul className={`PackDetails ${this.props.top}`}>
        <li>גישה לכל תכני גלובס בדיגיטל, באתר ובאפליקציה</li>
        <li>חווית משתמש משופרת</li>
        <li> מ-1995 ניוזלטרים, וארכיון כתבות</li>
        {this.props.children}
      </ul>
    )
  }
}
