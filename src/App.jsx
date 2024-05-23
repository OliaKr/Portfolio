import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "animate.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <section className="app">
      <Routes>
        <Route
          element={<HomePage />}
          path="/"
        />
      </Routes>
    </section>
  );
}

export default App;
