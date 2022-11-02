import React, { useState } from "react";
import { Vocab } from "./Vocab";
import { Frame } from "./Frame";
import { ChaChi } from "./MiniGames/ChaChi";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vocab Lesson={1} />} />
        <Route path="lessons" element={<Frame />} />
        <Route path="/chachi" exact element={<ChaChi />} />
      </Routes>
    </BrowserRouter>
  );
};
