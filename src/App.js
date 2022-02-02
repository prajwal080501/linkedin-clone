import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Header } from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import LinkedinNews from './components/LinkedinNews/LinkedinNews';
import {useState} from 'react';
import Popup from './components/Modal/Popup';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
    console.log(modalIsOpen);
  };
  return (
    <div className='App'>
      <Header />
      <div className="app">
        <Sidebar /> 
        <Feed modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} handleIsOpen={handleIsOpen}/>
        <LinkedinNews />
        <Popup modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} handleIsOpen={handleIsOpen} />
      </div>
    </div>
  );
}

export default App;
