import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';
import Header from "./Component/Header";
import Menu from "./Component/Menu";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
    </div>
  );
}

export default App;
