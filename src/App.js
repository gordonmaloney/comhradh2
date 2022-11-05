import React, { useState } from "react";
import { Vocab } from "./Lessons/LessonComponents/Vocab";
import { Frame } from "./Frame";
import { ChaChi } from "./MiniGames/ChaChi";
import { Tests } from "./Tests";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tests />} />
        <Route path="lessons" element={<Frame />} />
        <Route path="/chachi" exact element={<ChaChi />} />
      </Routes>
    </BrowserRouter>
  );
};
