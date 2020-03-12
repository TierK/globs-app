import React, { Component } from 'react';
import './DealPack.scss';
import PackName from './PackName/PackName';
import PackPrice from './PackPrice/PackPrice';
import PackShortTerms from './PackShortTerms/PackShortTerms';
import PackButton from './PackButton/PackButton';
import PackDetails from './PackDetails/PackDetails';
import PackLongTerms from './PackLongTerms/PackLongTerms';

export default class DealPack extends Component {
  render() {
    
    return (
      <article className={`DealPack ${this.props.top}`}>
        {this.props.children}
        <PackName period={this.props.periodName}/>
        <PackPrice price={this.props.price} period={this.props.packPeriod}/>
        <PackButton periodName={this.props.periodName} top={this.props.topBtn}/>
        <PackShortTerms postPrice={this.props.postPrice} postPeriod={this.props.postPeriod}/>
        <PackDetails top={this.props.topDetails} />
        <PackLongTerms/>
      </article>
    )
  }
}
