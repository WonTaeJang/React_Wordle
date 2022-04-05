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
        <Route exact path='/' element={<Main></Main>}></Route>
      </Routes>
    </div>
  );
}

export default App;
