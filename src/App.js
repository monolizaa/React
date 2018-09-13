import React, { Component } from 'react';
import './App.css';
//import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

class App extends Component {
  render() {
    return (
      <div>
        {
          //Array.from(word).map((c, i) => <CharacterCard value={c} key={i} />)
          <WordCard value="hello"/>
        }
      </div>
    );
  }
}

export default App;
