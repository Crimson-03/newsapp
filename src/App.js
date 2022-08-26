import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general" />} />
            <Route path="/business" element={<News key="business" pageSize={pageSize} apiKey={apiKey} country="in" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment" />} />
            <Route path="/health" element={<News key="health" pageSize={pageSize} apiKey={apiKey} country="in" category="health" />} />
            <Route path="/science" element={<News key="science" pageSize={pageSize} apiKey={apiKey} country="in" category="science" />} />
            <Route path="/sports" element={<News key="sports" pageSize={pageSize} apiKey={apiKey} country="in" category="sports" />} />
            <Route path="/technology" element={<News key="technology" pageSize={pageSize} apiKey={apiKey} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }

export default App