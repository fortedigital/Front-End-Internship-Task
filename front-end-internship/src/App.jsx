import "./App.css";
import EditIntern from "./EditIntern";
import InternList from "./InternList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InternList />} />
        <Route path="/interns/:id" exact element={<EditIntern />} />
      </Routes>
    </div>
  );
}

export default App;
