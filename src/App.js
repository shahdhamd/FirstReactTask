import React, { Component } from 'react'

import {Navbar ,People,Profile,Header,Contact,Footer} from './component/index.jsx'
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Profile/>
        <People/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default App


































