import React, { Component } from 'react'

import Navbar from './component/navbar'
import News from './component/news'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
     
        <News/>
        
  
      </div>
    )
  }
}
