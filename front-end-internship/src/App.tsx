import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { InternList } from './InternList';
import { EditIntern } from './EditIntern';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<InternList />} />
          <Route path="/interns/:id" element={<EditIntern />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
