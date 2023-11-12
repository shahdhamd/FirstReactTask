import React, { Component } from 'react'
import './card.css'
export default class Card extends Component {
  render() {
    let {id , image,title,desc}=this.props.inform
    return (
        <div className='col-lg-4 item' >
        <img src={image} className='m-auto' />
    <h4>{title}</h4>
    <p>{desc}</p>
    </div>
    )
  }
}
