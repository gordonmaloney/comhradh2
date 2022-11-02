import { Link } from "react-router-dom";

export const Words = [
  {
    lesson: 1,
    words: [
      {
        gd: <>tha</>,
        en: <>am/are/is</>,
        pro: (
          <>
            Careful with the <i>th</i> - this is pronounced like an <i>h</i>
          </>
        ),
        mne: (
          <>
            <br />
            <br />
          </>
        ),
      },
      {
        gd: <>mi</>,
        en: <>I</>,
        pro: (
          <>
            <br />
            <br />
          </>
        ),
        mne: <>Pronounced just like the English word ‘me’</>,
      },
      {
        gd: <>beag</>,
        en: <>small</>,
        pro: (
          <>
            The <i>g</i> at the end is pronounced more like the English <i>k</i>
          </>
        ),
        mne: (
          <>
            You can imagine a bird’s wee <i>beak</i>
          </>
        ),
      },
      {
        gd: <>mòr</>,
        en: <>big</>,
        pro: (
          <>
            The accent on the <i>ò</i> makes the vowel long - moooooor
          </>
        ),
        mne: <>If you eat mòr and mòr, you’ll get big</>,
      },
      {
        gd: <>thu</>,
        en: <>you</>,
        pro: (
          <>
            Although <i>th</i> is usually pronounced like <i>h</i>, in this one
            word it is completely silent
          </>
        ),
        mne: (
          <>
            Think of the English word <i>thou</i>
          </>
        ),
      },
      {
        gd: <>sgìth</>,
        en: <>tired</>,
        pro: (
          <>
            Sounds a lot like the English word <i>ski</i>
          </>
        ),
        mne: (
          <>
            If you spent all day <i>skiing</i>, you’d be sgìth
          </>
        ),
      },
      {
        gd: <>brònach</>,
        en: <>sad</>,
        pro: (
          <>
            Careful with the <i>ch</i> in this word and in the following one,
            because it’s slightly different.
            <br />
            <br />
            In this word, it’s the same as in the Scots <i>loch</i>, or the
            German <i>Bach</i>. And just remember that the stress in Gaelic is
            always on the first syllable: <i>BRÒnach</i>.
          </>
        ),
        mne: <>Can’t have good, easy mnemonics for everything - sorry!</>,
      },
      {
        gd: <>toilichte</>,
        en: <>happy</>,
        pro: (
          <>
            The <i>ch</i> in this word is slightly further forward in the mouth
            than in <i>brònach</i>. In Gaelic, consonants can be affected by the
            vowels they’re next to, and this is an example of that.
            <br />
            <br />
            Vowels are split into two categories in Gaelic - ‘broad’ or ‘back’
            ones: AOU, and ‘slender’ or ‘front’ ones: IE. The <i>ch</i> in{" "}
            <i>brònach</i> is next to a broad vowel (a), so it’s further back in
            the mouth, and the <i>ch</i> in <i>toilichte</i> is next to a
            slender one (i), so it’s further forward.
            <br />
            <br />
            We have this same principle in English too - with words like{" "}
            <i>call</i> and <i>cell</i>. <br />
            <br />
            If you want to practice with these sounds, <Link to="/chachi">you can play this game.</Link>
            <br />
            <br />
            The IPA for this one - if that’s your thing - is /ç/
          </>
        ),
        mne: (
          <>
            Imagine you’ve gone all day desperate to get to the <i>toilet</i>,
            you’d be pretty <i>toilichte</i> when you finally made it!
          </>
        ),
      },
    ],
  },
];
