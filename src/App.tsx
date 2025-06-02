
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TechnologyDetailPage from "./pages/TechnologyDetailPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/technology/:techId" element={<TechnologyDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
