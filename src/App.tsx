import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/photos" element={<PhotosPage />} />
      <Route path="*" element={<h1>404 not found</h1>} />
    </Routes>
  );
}

export default App;
