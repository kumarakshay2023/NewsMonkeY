import React, { Component } from 'react'
import spinner from './spinner.gif'
import './heading.css';
export default class Spinner extends Component {
    render() {
        return (
            <div className="head">
                <img src={spinner} alt="spineer"></img>
            </div>
        )
    }
}
