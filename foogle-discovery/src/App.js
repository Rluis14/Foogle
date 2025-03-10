import React from 'react';
import { Routes, Route } from 'react-router-dom';  // ✅ Correct import
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import SearchPage from './components/SearchPage';
import FilterSearchPage from './components/FilterSearchPage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/filter" element={<FilterSearchPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
