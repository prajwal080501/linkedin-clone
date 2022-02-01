import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Header } from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import LinkedinNews from './components/LinkedinNews/LinkedinNews';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app">
        <Sidebar /> 
        <Feed />
        <LinkedinNews />
      </div>
    </div>
  );
}

export default App;
