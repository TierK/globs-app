import React, { Component } from "react";
import DealPack from "./DealPack/DealPack";
import "./DealMenu.scss";

export default class DealMenu extends Component {
  render() {
    return (
      <section className="DealMenu">
        <DealPack
          props = "top"
          periodName="שנתי"
          price="1"
          packPeriod="חודש ראשון"
          postPrice="₪1"
          postPeriod="שנה ראשונה"
          topBtn = "topBtn"
          topDetails = "toplist"
        >
          <div className="topHead">המסלול המשתלם</div>
          </DealPack>
        <DealPack
          periodName="חודשי"
          price="1"
          packPeriod="חודש"
          postPrice="₪1"
          postPeriod="חודש"
        />
      </section>
    );
  }
}
