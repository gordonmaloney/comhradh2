import React from "react";
import { MakeSentences } from "./Lessons/TestComponents/MakeSentences";
import { FindMistake } from "./Lessons/TestComponents/FindMistake";
import { Revealer } from "./Lessons/TestComponents/Revealer";
import { TranslateOne } from "./Lessons/TestComponents/TranslateOne";

export const Tests = () => {
  return (
    <div>
      <h1 className="test">Tests</h1>

      <TranslateOne Blurb A={["I am small", "I'm small"]} Q={"Tha mi beag"} />
      <TranslateOne  A={["I am big", "I'm big"]} Q={"Tha mi mòr"} />

      <Revealer q="I am small" a="Tha mi beag" />

      <MakeSentences
        Blurb
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
      />

      <MakeSentences
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
      />

      <MakeSentences
        Length={2}
        words={[
          { word: "a", pos: 0 },
          { word: "nach", pos: 0 },
          { word: "bheil", pos: 1, prev: "a" },
          { word: "eil", pos: 1, prev: "nach" },
        ]}
      />

      <FindMistake
        Blurb
        sentence={"tha  mi  sgith"}
        mistake={"sgith"}
        correct={"sgìth"}
      />

<FindMistake sentence={"tha  mi X dol"} mistake={"X"} correct={"a'"} />

      <FindMistake sentence={"tha  mi X dol"} mistake={"X"} correct={"a'"} />
    </div>
  );
};
