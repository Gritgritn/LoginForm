import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import Welcome from './components/Welcome';
import Header from './components/Header';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App__container">
          <Routes>
            <Route path="/welcome" element={ <Welcome/> }/>
            <Route path="/" element={ <LoginScreen/> }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;