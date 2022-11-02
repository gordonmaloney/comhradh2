import React from "react";
import { Grid } from "@mui/material";
import { VocabGrid } from "./LessonComponents/VocabGrid";
import { Example } from "./LessonComponents/Example";
import { WordForWord } from "./LessonComponents/WordForWord";
import { Vocab } from "../Vocab";
import { Revealer } from "./LessonComponents/Revealer";
import { MakeSentences } from "./LessonComponents/MakeSentences";
import { FindMistake } from "./LessonComponents/FindMistake";

export const One = () => {
  return (
    <div>
      <h2>Lesson One</h2>

      <p>
        Let’s start by learning four words. You can expand them using the button
        on the right to see tips for pronunciation and memorisation.
      </p>

      <Vocab Lesson={1} filter={["tha", "mi", "beag", "mòr"]} />

      <p>
        But before we can make a sentence with them, we need to understand that
        the order that words go in when you’re speaking Gaelic is a little
        different from English.
      </p>

      <Example explainer={"In English, you would say:"} text={"I am big"} />

      <Example
        explainer={"But in Gaelic, that sentence would be:"}
        text={"Tha mi mòr"}
      />

      <Example
        explainer={
          "But the literal, word-for-word translation of this would be:"
        }
        text={"am I big"}
      />

      <p>
        From time to time, we'll show you these kinds of literal, word-for-word
        translation of the Gaelic, to help you understand what's happening. For
        this sentence, that would look like:
      </p>
      <WordForWord en={"I am big"} gd={"Tha mi mòr"} lit={"am I big"} />

      <p>
        As you can see, in Gaelic the verb comes <i>before</i> the subject. This
        will take some time to get used to, but the good news is that this
        sentence construction is consistent throughout Gaelic. It’ll be second
        nature before you know it.{" "}
      </p>

      <Example explainer={"So if:"} text={"Tha mi mòr"} />

      <Example explainer={"Means:"} text={"I am big"} />

      <p>
        And <i>beag</i> means <i>small</i>, can you work out the Gaelic for
        this?
      </p>

      <Revealer q="I am small" a="Tha mi beag" />

      <p>
        This is really easy in Gaelic - you simply replace the adjective with
        another one, and everything else stays the same. The adjective also
        doesn’t change its form in sentences like this, so it really is just a
        matter of slotting it in.
      </p>

      <p>Let’s now learn a couple more words:</p>

      <Vocab Lesson={1} filter={["thu", "sgìth", "brònach", "toilicthe"]} />

      <Example
        explainer={
          "In English, as well as many other languages, verbs sometimes change their form depending on who or what they are attached to. So we have:"
        }
        text={
          <>
            I <i>am</i>
          </>
        }
      />

      <Example
        explainer={"But:"}
        text={
          <>
            You <i>are</i>
          </>
        }
      />

      <p>
        In Gaelic, however, verbs are much simpler and stay the same no matter
        who or what they refer to. That means that you can use the word tha to
        describe anyone or anything. All you have to do is replace the{" "}
        <i>subject</i> (the person or thing being described, the mi in our first
        examples) with a different one:
      </p>

      <Example
        text={
          <span style={{ fontWeight: "400" }}>
            Tha mi mòr
            <br />
            Tha <s>mi</s> mòr
            <br />
            Tha thu mòr
          </span>
        }
      />

      <p>
        Like we saw earlier with the adjectives for sentences like this you can
        simply slot a different subject in and out and everything else stays the
        same.
      </p>

      <p>
        That means <i>tha</i> could be translated as <i>am</i>, <i>are</i>, or
        even <i>is</i> depending on context. Much easier than English!
      </p>

      <h2>Recap</h2>
      <ul>
        <li>
          The word-order in Gaelic is different to English, and for the
          sentences we’ve looked at here goes <i>verb-subject-adjective</i> (as
          opposed to English, which is <i>subject-verb-adjective</i>)
        </li>
        <li>
          The verb <i>tha</i> doesn’t change depending on the person or thing
          that the sentence is about
        </li>
      </ul>

      <h2>Vocab</h2>
      <Vocab Lesson={1} />

      <MakeSentences
        Length={4}
        words={[
          { word: "tha", pos: 0, length: 2},
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
          {word: 'a', pos: 0},
          {word: 'nach', pos: 0},
          {word: 'bheil', pos: 1, prev: 'a'},
          {word: 'eil', pos: 1, prev: 'nach'},
        ]} />

      <MakeSentences
        Length={3}
        words={[
          { word: "tha", pos: 0 },
          { word: "tha", pos: 0 },
          { word: "tha", pos: 0 },
          { word: "tha", pos: 0 },
          { word: "tha", pos: 0 },
          { word: "mi", pos: 1 },
          { word: "mi", pos: 1 },
          { word: "thu", pos: 1 },
          { word: "thu", pos: 1 },
          { word: "thu", pos: 1 },
          { word: "beag", pos: 2 },
          { word: "mòr", pos: 2 },
          { word: "sgìth", pos: 2 },
          { word: "brònach", pos: 2 },
          { word: "toilichte", pos: 2 },
        ]}
      />


      <FindMistake 
        sentence={'tha  mi  sgith'}
        mistake={'sgith'}
        correct={'sgìth'}
      />

  <FindMistake 
        sentence={'tha  mi X dol'}
        mistake={'X'}
        correct={"a'"}
      />
    </div>
  );
};
