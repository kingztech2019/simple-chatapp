import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import HomePage from "./components/HomePage";

function RoutesFile() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default RoutesFile;
