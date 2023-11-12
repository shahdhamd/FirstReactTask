import React, { Component } from 'react'
import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa6";
import './footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <ul className=''>
          <li className='me-3'>< FaFacebookF style={{'fontSize':'20px','color':'white'}} className='icon'/></li>
          <li className='me-3'><FaInstagram style={{'fontSize':'20px','color':'white'}} className='icon'/></li>
          <li><FaTwitter style={{'fontSize':'20px',"color":'white'}} className='icon'/></li>
        </ul>
        <span >Copyright © created by <u>Shahd</u></span>
      </div>
    )
  }
}
