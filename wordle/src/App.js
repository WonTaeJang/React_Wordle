import logo from './logo.svg';
import './App.css';

// components
import Main from './components/Main.js';

import { useSelector } from 'react-redux';

// npm install react-router-dom
import { Route, Routes } from 'react-router-dom';
import { useEffect,useState } from 'react';

function App() {
  let state = useSelector((state) => state[0] )
  let [test,settest] = useState();

  useEffect(()=>{
    settest(state.reducer);
    console.log(test);
  },[state])

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
