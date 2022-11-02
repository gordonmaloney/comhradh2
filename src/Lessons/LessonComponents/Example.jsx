import React from "react";

//explainer option, text not

export const Example = ({ explainer, text }) => {
  return (
    <div>
      {explainer && <p>{explainer}</p>}
      <center>
        <div style={{ display: 'inline-block', padding: "5px 15px", border: "1px solid black" }}>
<h4 style={{padding: '0px', margin: '0px'}}>{text}</h4>
          </div>
      </center>
    </div>
  );
};
