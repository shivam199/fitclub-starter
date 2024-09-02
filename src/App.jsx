import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Home from './pages/CreatePlan/createPlan';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    {/* Header Section */}
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    
    </Routes>
  </Router>
  );
}

export default App;
