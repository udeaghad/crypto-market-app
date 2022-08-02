import React from 'react';
import HomePage from './Components/HomePage';
import CoinPage from './Components/CoinPage';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App = () => {
  

  return (
    <>

  <Router> 
    <Routes>
      <Route exact path="*" element={<HomePage />} />
      <Route path='/details' element={<CoinPage />}/>
    </Routes>
    </Router>

  </>
    
  
  );
}

export default App;
