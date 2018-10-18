import React, { Component } from 'react';
import './App.css';
import data from './data.js';
import FilmList from './FilmList';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: data
    };
  }



  render() {
    return (
      <div className="App">
        <header>
          <h1>Hi</h1>
        </header>

        <FilmList 
        resultsOfData = {this.state.results}
        />

      </div>
    );
  }
}

export default App;
