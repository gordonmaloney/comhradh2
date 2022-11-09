import React, { useState } from "react";
import { MakeSentences } from "./Lessons/TestComponents/MakeSentences";
import { FindMistake } from "./Lessons/TestComponents/FindMistake";
import { Revealer } from "./Lessons/TestComponents/Revealer";
import { TranslateOne } from "./Lessons/TestComponents/TranslateOne";
import { Dragger } from "./Lessons/TestComponents/Dragger";
import { TestFrame } from "./Lessons/TestComponents/TestFrame";

export const Tests = () => {
  return (
    <div>
      <TestFrame
        questions={[
          <FindMistake
            header={"default"}
            sentence={"tha  mi X dol"}
            mistake={"X"}
            correct={"a'"}
          />,
          <TranslateOne
            header={"default"}
            A={["I am small", "I'm small"]}
            Q={"Tha mi beag"}
          />,
          <TranslateOne
            header={"default"}
            A={["I am big", "I'm big"]}
            Q={"Tha mi mòr"}
          />,

          <Dragger header={"default"} sentence="tha thu beag" />,

          <Revealer header={"default"} q="I am small" a="Tha mi beag" />,

          <MakeSentences
            header={"default"}
            Length={4}
            words={[

              { word: "tha", pos: 0, length: 2 },
              { word: "chan", pos: 0 },

              { word: "eil", pos: 1 },

              { word: "mi", pos: 2 },
              { word: "thu", pos: 2 },
              { word: "sgìth", pos: 3 },
              { word: "mòr", pos: 3 },
            ]}
          />,

          <MakeSentences
            header={"default"}
            Length={4}
            words={[
              { word: "tha", pos: 0 },
              { word: "tha", pos: 0 },
              { word: "mi", pos: 1 },
              { word: "thu", pos: 1 },
              { word: "ag", pos: 2 },
              { word: "a'", pos: 2 },
              { word: "dol", pos: 3, prev: "a'" },
              { word: "ithe", pos: 3, prev: "ag" },
            ]}
          />,

          <MakeSentences
            header={"default"}
            Length={2}
            words={[
              { word: "a", pos: 0 },
              { word: "nach", pos: 0 },
              { word: "bheil", pos: 1, prev: "a" },
              { word: "eil", pos: 1, prev: "nach" },
            ]}
          />,

          <FindMistake
            header={"default"}
            sentence={"tha  mi  sgith"}
            mistake={"sgith"}
            correct={"sgìth"}
          />,
        ]}
      />
    </div>
  );
};
