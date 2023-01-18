import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { InternList } from './InternList';
import { EditIntern } from './EditIntern';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InternList />} />
        <Route path="/interns/:id" element={<EditIntern />} />
      </Routes>
    </div>
  );
}

export default App;
