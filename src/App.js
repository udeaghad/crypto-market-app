import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CoinPage from './Components/CoinPage';
import './App.css';

const App = () => (
  <>

    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/details" element={<CoinPage />} />
      </Routes>
    </Router>

  </>

);

export default App;
