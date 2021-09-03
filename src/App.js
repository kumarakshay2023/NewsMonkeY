import React, { Component } from 'react'

import Navbar from './component/navbar'
import News from './component/news'
import {
  BrowserRouter as Router,
  Switch,
  Route 
 
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route path="/"><News key="general" country="in" category="general"/></Route>
          <Route path="/business"><News key="business" country="in" category="business"/></Route>
          <Route path="/entertainment"><News key="entertainment" country="in" category="entertainment"/></Route>
          <Route path="/general"><News key="general" country="in" category="general"/></Route>
          <Route path="/health"><News key="health" country="in" category="health"/></Route>
          <Route path="/science"><News key="science" country="in" category="science"/></Route>
          <Route path="/sports"><News key="sports" country="in" category="sports"/></Route>
          <Route path="/technology"><News key="technology" country="in" category="technology"/></Route>
          </Switch> 
    
        </Router>
  
      </div>
    )
  }
}
