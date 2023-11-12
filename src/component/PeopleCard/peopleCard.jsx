import React, { Component } from 'react'
import './peopleCard.css'
export default class PeopleCard extends Component {
  render() {
    let {image,id,name,des}=this.props.data;
    return (
      <div className='col-lg-4 people text-center mb-5'>
        <img src={image} width='200px' />
        <p style={{'fontWeight':'bold','fontSize':'25px'}}>{name}</p>
        <span >{des}</span>
      </div>
    )
  }
}
