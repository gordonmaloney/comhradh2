import { useState } from "react";

export const Revealer = ({ q, a }) => {
  const [reveal, setReveal] = useState(false);

  return (
    <div style={{ paddingBottom: "15px" }}>
      <center>
        <div
          style={{
            display: "inline-block",
            padding: "5px 15px",
            border: "1px solid black",
          }}
        >
          {q}
          <br />
          <br />
          <span
            style={{backgroundColor: reveal ? '' : 'black'}}
            onClick={() => setReveal(prev => !prev)}
            >
            <b>{a}</b>
          </span>
        </div>
      </center>
    </div>
  );
};
