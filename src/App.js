// app.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { BoshSahifa } from "./pages/audio/boshsahifa";

export function Hello() {
    return (
      <Routes>
        <Route path="/" element={<BoshSahifa />}/>
      </Routes>
    );
}