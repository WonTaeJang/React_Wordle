import logo from './logo.svg';
import './App.css';

// components
import Main from './components/Main.js';

// npm install react-router-dom
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Main max_step={[1,2,3,4,5,6,7]}></Main>}></Route>
      </Routes>
    </div>
  );
}

export default App;
