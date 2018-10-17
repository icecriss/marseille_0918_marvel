import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Slide from './components/Slide/Slide';
import Menu from './components/Menu/menu';
import Footer from './components/Footer/Footer';

import Background from './bg.jpg';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundImage: `url(${Background})`}}>
        <header className="App-header">
          <NavBar/>
          <Slide/>
        </header>
        <Menu />
        <Footer/>
      </div>
    );
  }
}

export default App;