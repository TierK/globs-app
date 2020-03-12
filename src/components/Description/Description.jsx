import React, { Component } from 'react'
import './Description.scss';

export default class Description extends Component {
  render() {
    return (
      <div className="Description">
        <div className="container">
          <strong>חשוב לנו לעדכן אותך שהחיוב יתבצע רק כאשר תכני גלובס באתר יהיו בתשלום</strong>
          <p>ועד אז, תהיה לך גישה לכל התכנים ללא תשלום.</p>
          <p>אנחנו מעריכים את הבעת האמון שלך בנו, ונשמח להעניק לך כרטיס לאחת מוועידות גלובס, לבחירתך.</p>
          <p>מייל שכולל מידע אודות ועידות גלובס ואופציה לבחירה, יישלח אליך מיד לאחר הרכישה.</p>
        </div>
      </div>
    )
  }
}
