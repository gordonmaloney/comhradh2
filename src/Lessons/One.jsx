import { useState } from "react";
import { Example } from "./LessonComponents/Example";
import { WordForWord } from "./LessonComponents/WordForWord";
import { Vocab } from "./LessonComponents/Vocab";
import { Revealer } from "./TestComponents/Revealer";
import { MakeSentences } from "./TestComponents/MakeSentences";
import { Dragger } from "./TestComponents/Dragger";
import { TranslateOne } from "./TestComponents/TranslateOne";
import { TestFrame } from "./TestComponents/TestFrame";
import { Button, Grid } from "@mui/material";
import { AnswerBtn } from "./TestComponents/Common";
import { useEffect } from "react";

export const One = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0,0)
  }, [step])

  const Steps = [
    //lesson
    <>
      <h2 className="header">Lesson One</h2>
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
    </>,
    //recap and vocab
    <>
      <h2 className="header">Recap</h2>
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
      <br />
      <h2 className="header">Vocab</h2>
      <Vocab Lesson={2} />
    </>,
    //test
    <>
      <h2 className="header">Test your skills</h2>
      <TestFrame
        questions={[
          <MakeSentences
            header="default"
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
          />,
          <Dragger header="default" sentence="tha thu brònach" />,
          <Dragger header="default" sentence="tha thu mòr" />,
          <Dragger header="default" sentence="tha thu beag" />,
          <Dragger header="default" sentence="tha mi toilichte" />,
          <Dragger header="default" sentence="tha thu sgìth" />,
          <Dragger header="default" sentence="tha mi mòr" />,

          <TranslateOne
            header="default"
            A={["You are happy", "You're happy"]}
            Q={"Tha thu toilichte"}
          />,

          <TranslateOne
            header="default"
            A={["I am tired", "I'm tired"]}
            Q={"Tha mi sgìth"}
          />,
          <TranslateOne
            header="default"
            A={["You are big", "You're big"]}
            Q={"Tha thu mòr"}
          />,
          <TranslateOne
            header="default"
            A={["Tha mi beag"]}
            Q={"I am small"}
          />,
          <TranslateOne
            header="default"
            A={["Tha thu brònach"]}
            Q={"You are sad"}
          />,
          <TranslateOne
            header="default"
            A={["Tha thu sgìth"]}
            Q={"You are tired"}
          />,
        ]}
      />
    </>,
  ];

  const NavBtns = ({ top }) => {
    return (
      <div
        style={{
          width: "100%",
          top: 0,
          backgroundColor: "#00842a",
        }}
      >
        <div style={{ padding: "10px 20px 15px 20px" }}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <AnswerBtn
                sx={{ backgroundColor: step == 0 && "#407a8c" }}
                disabled={step == 0}
                onClick={() => setStep(0)}
              >
                Lesson
              </AnswerBtn>
            </Grid>

            <Grid item>
              <AnswerBtn
                sx={{ backgroundColor: step == 1 && "#407a8c" }}
                disabled={step == 1}
                onClick={() => setStep(1)}
              >
                Recap
              </AnswerBtn>
            </Grid>

            <Grid item>
              <AnswerBtn
                sx={{ backgroundColor: step == 2 && "#407a8c" }}
                disabled={step == 2}
                onClick={() => setStep(2)}
              >
                Test
              </AnswerBtn>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          position: "sticky",
          width: "100%",
          top: 0,
          backgroundColor: "#00842a",
          zIndex: "2",
        }}
      >
        <NavBtns top />
      </div>
      <div style={{ margin: "20px" }}>
        {Steps[step]}

        <br />
        <br />
        {step < 2 && (
          <center>
            <AnswerBtn onClick={() => setStep((prev) => prev + 1)}>
              Next
            </AnswerBtn>
          </center>
        )}
      </div>
    </div>
  );
};

/*
  return (
    <div style={{ margin: "10px" }}>
      <br />
      <h2 className="header">Lesson One</h2>
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
      <br />
      <br />
      <br />
      <h2 className="header">Test your skills</h2>
      <TestFrame
        questions={[
          <MakeSentences
            header="default"
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
          />,
          <Dragger header="default" sentence="tha thu brònach" />,
          <Dragger header="default" sentence="tha thu mòr" />,
          <Dragger header="default" sentence="tha thu beag" />,
          <Dragger header="default" sentence="tha mi toilichte" />,
          <Dragger header="default" sentence="tha thu sgìth" />,
          <Dragger header="default" sentence="tha mi mòr" />,

          <TranslateOne
            header="default"
            A={["You are happy", "You're happy"]}
            Q={"Tha thu toilichte"}
          />,

          <TranslateOne
            header="default"
            A={["I am tired", "I'm tired"]}
            Q={"Tha mi sgìth"}
          />,
          <TranslateOne
            header="default"
            A={["You are big", "You're big"]}
            Q={"Tha thu mòr"}
          />,
          <TranslateOne
            header="default"
            A={["Tha mi beag"]}
            Q={"I am small"}
          />,
          <TranslateOne
            header="default"
            A={["Tha thu brònach"]}
            Q={"You are sad"}
          />,
          <TranslateOne
            header="default"
            A={["Tha thu sgìth"]}
            Q={"You are tired"}
          />,
        ]}
      />{" "}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

*/
