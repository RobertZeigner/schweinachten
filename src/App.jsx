import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Create from "./components/Create";
import Schweinchen from "./components/Schweinchen";
import Update from "./components/Update";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mitmachen" element={<Create />} />
        <Route path="/schweinchen" element={<Schweinchen />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
