import React, { Component } from 'react'
import {Films} from '../share/ListOfFilms'
import FilmsPresentation from './films/FilmsPresentation'
export default class Main extends Component {
    constructor(){
        super();
        this.state={
            films:Films
        };
    }
  render() {
    return <FilmsPresentation films={this.state.films}/>
  }
}
