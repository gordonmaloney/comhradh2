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
import { VerbGrid } from "./LessonComponents/VerbGrid";
import { Selecter } from "./TestComponents/Selecter";

export const Two = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const Steps = [
    //lesson
    <>
      <h2 className="header">Lesson Two: Denying and asking</h2>
      <p>
        In the last lesson, we learned the word <em>tha</em>, and how it could
        mean <em>am</em>, <em>are</em> or <em>is</em>. We also learned that it
        always comes <em>before</em> the subject of the sentence, and that it
        doesn&rsquo;t change form depending on what the subject is.
      </p>
      <p>
        It <em>does</em>, though, change form to become negative or to become a
        question.
      </p>
      <p>
        The negative form of <em>tha</em> is <em>chan eil</em>. Just like{" "}
        <em>tha</em>, though, this always comes at the start of a sentence and
        doesn&rsquo;t change depending on the subject, so you could translate it
        as <em>am not</em>, <em>are not</em> and <em>is not</em>.
      </p>

      <Example
        explainer={
          "This means that we can make an ‘affirmative’ sentence like:"
        }
        text={
          <>
            <u>Tha</u> mi beag
            <br />I <u>am</u> small
          </>
        }
      />

      <Example
        explainer={
          <>
            ...into a ‘negative’ one by just swapping out <em>tha</em> for{" "}
            <em>chan eil</em>:
          </>
        }
        text={
          <>
            <u>Chan eil</u> mi beag
            <br />I <u>am not</u> small
          </>
        }
      />

      <p>
        But before we practice that, let’s also learn how to make the question
        (the ‘interrogative’ forms). In Gaelic, there is both an ‘affirmative’
        and a ‘negative’ question form:
      </p>

      <Vocab Lesson={2} filter={["a bheil", "nach eil"]} />

      <p>
        But just like with <em>tha</em> and <em>chan eil</em>, everything else
        in the sentence stays the same - you simply swap out the{" "}
        <em>statement</em> form (<em>tha</em> or <em>chan eil</em>) with the{" "}
        <em>question </em>form (<em>a bheil</em> or <em>nach eil</em>).
      </p>
      <p>
        Let&rsquo;s see some examples, and see if you can guess what they mean:
      </p>

      <Revealer q="A bheil thu beag?" a="Are you small?" />
      <Revealer q="Nach eil mi sgìth?" a="Aren't I tired?" />
      <Revealer q="A bheil mi mòr?" a="Am I big?" />
      <Revealer q="Nach eil thu brònach?" a="Aren't you sad?" />

      <p>
        Most verbs in Gaelic work in a similar way to this (though you’ll be
        pleased to know that most others are much, much more regular!), and we
        can represent them in a chart like this:
      </p>

      <VerbGrid words={["tha", "chan eil", "a bheil?", "nach eil?"]} />

      <p>
        And to finish this lesson, we’re going to learn a couple new words that
        can be the subjects of sentences:
      </p>

      <Vocab Lesson={2} filter={["e", "i", "Calum", "Mòrag"]} />

      <p>
        Just like with <em>mi</em> and <em>thu</em>, you can swap out the
        subject of a sentence for <em>e</em> or <em>i</em>, or pretty much any
        other noun - like someone&rsquo;s name - and the rest of the sentence
        stays the same.
      </p>
      <p>
        We&rsquo;ll practice all of that in a moment, but first let&rsquo;s
        learn just two more adjectives:
      </p>

      <Vocab Lesson={2} filter={["blàth", "fuar"]} />

      <p>
        And here they are in some sentences - see if you can understand them:
      </p>

      <Revealer q="Chan eil e blàth" a="He isn't warm" />
      <Revealer q="A bheil i fuar?" a="Is she cold?" />
      <Revealer q="Tha Calum blàth" a="Calum is warm" />
      <Revealer q="Nach eil Mòrag fuar?" a="Isn't Morag cold?" />
    </>,
    //recap and vocab
    <>
      <h2 className="header">Recap</h2>
      <ul>
        <li>
          The full forms of tha for both positive and negative, and statement
          and question, looks like this:
          <VerbGrid words={["tha", "chan eil", "a bheil?", "nach eil?"]} />
        </li>
        <li>
          Just like with <i>tha</i>, the forms stay the same no matter what the
          subject is
        </li>
        <li>
          All subjects - whether they are pronouns, names, or other nouns - work
          the same, and don’t change the other words in the sentence or the word
          order
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
          <TranslateOne
            header="Flip this sentence from positive to negative or vice versa:"
            A={["Tha i toilichte"]}
            Q={"Chan eil i toilichte"}
          />,
          <TranslateOne
            header="Flip this sentence from positive to negative or vice versa:"
            A={["Chan eil mi sgìth"]}
            Q={"Tha mi sgìth"}
          />,
          <TranslateOne
            header="Flip this sentence from positive to negative or vice versa:"
            A={["Nach eil Mòrag blàth?"]}
            Q={"A bheil Mòrag blàth?"}
          />,
          <TranslateOne
            header="Flip this sentence from positive to negative or vice versa:"
            A={["A bheil thu brònach?"]}
            Q={"Nach eil thu brònach?"}
          />,

          <TranslateOne
            header="Flip this sentence from a statement to a question or vice versa:"
            A={["Tha Calum beag."]}
            Q={"A bheil Calum beag?"}
          />,
          <TranslateOne
            header="Flip this sentence from a statement to a question or vice versa:"
            A={["Chan eil i mòr."]}
            Q={"Nach eil i mòr?"}
          />,
          <TranslateOne
            header="Flip this sentence from a statement to a question or vice versa:"
            A={["A bheil a fuar?"]}
            Q={"Tha e fuar."}
          />,
          <TranslateOne
            header="Flip this sentence from a statement to a question or vice versa:"
            A={["Nach eil Mòrag sgìth?"]}
            Q={"Chan eil Mòrag sgìth."}
          />,

          <Selecter
            header="Add the correct punctuation to the following sentences - a question mark for question, and a full stop for statements:"
            text={"Chan eil mi brònach"}
            options={[".", "?"]}
            correct="."
          />,

          <Selecter
            header="Add the correct punctuation to the following sentences - a question mark for question, and a full stop for statements:"
            text={"A bheil thu sgìth"}
            options={[".", "?"]}
            correct="?"
          />,

          <Selecter
            header="Add the correct punctuation to the following sentences - a question mark for question, and a full stop for statements:"
            text={"Nach eil e mòr"}
            options={[".", "?"]}
            correct="?"
          />,

          <Selecter
            header="Add the correct punctuation to the following sentences - a question mark for question, and a full stop for statements:"
            text={"Tha i beag"}
            options={[".", "?"]}
            correct="."
          />,
          <Selecter
            header="Add the correct punctuation to the following sentences - a question mark for question, and a full stop for statements:"
            text={"A bheil i blàth"}
            options={[".", "?"]}
            correct="?"
          />,
          <Selecter
            header="Add the correct punctuation to the following sentences - a question mark for question, and a full stop for statements:"
            text={"Tha thu toilichte"}
            options={[".", "?"]}
            correct="."
          />,
          <Selecter
            header="Add the correct punctuation to the following sentences - a question mark for question, and a full stop for statements:"
            text={"Chan eil Mòrag fuar"}
            options={[".", "?"]}
            correct="."
          />,

          <TranslateOne
            header="default"
            A={["A bheil thu beag?"]}
            Q={"Are you small?"}
          />,
          <TranslateOne
            header="default"
            A={["Nach eil mi fuar?"]}
            Q={"Am I not cold?"}
          />,
          <TranslateOne
            header="default"
            A={["A bheil i sgìth?"]}
            Q={"Is she tired?"}
          />,
          <TranslateOne
            header="default"
            A={["Chan eil mi mòr"]}
            Q={"I am not big."}
          />,
          <TranslateOne
            header="default"
            A={["Tha e fuar"]}
            Q={"He is cold."}
          />,
          <TranslateOne
            header="default"
            A={["Nach eil e fuar?"]}
            Q={"Isn't he cold?"}
          />,
          <TranslateOne
            header="default"
            A={["A bheil thu beag?"]}
            Q={"Are you small?"}
          />,
          <TranslateOne
            header="default"
            A={["Tha Mòrag brònach"]}
            Q={"Morag is sad."}
          />,
          <TranslateOne
            header="default"
            A={["Chan eil Calum toilichte"]}
            Q={"Calum is not happy."}
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
