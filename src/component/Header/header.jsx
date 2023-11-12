import React, { Component } from 'react';
import './header.css';
export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='overlay '>
          <div className='top'>
            <div>
              <h1>Generate more leads with a professional landing page!</h1>
            </div>
            <form>
              <input type='text ' className='form-control ' />
              <button className='btn btn-primary '>Submit</button>
            </form>
          </div>

        </div>
      </div>

    )
  }
}
