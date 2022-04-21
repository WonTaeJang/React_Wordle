import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';

// components
import Main from './components/Main.js';

// npm install react-router-dom
import { Route, Routes } from 'react-router-dom';

function App() {
  //console.log('hi: ',state.reducer);
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Main max_step={[1, 2, 3, 4, 5, 6]}></Main>}></Route>
      </Routes>
    </div>
  );
}

export default App;
