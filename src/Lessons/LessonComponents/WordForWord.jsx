import { Grid } from "@mui/material";
import React from "react";

export const WordForWord = ({ en, gd, lit }) => {
  const length = en.split(" ");

  const PStyle = { lineHeight: "8px" };

  return (
      <Grid container spacing={3} style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <Grid item style={{ margin: "0 5px 0 0" }}>
          <p style={PStyle}>English:</p>
          <p style={PStyle}>Gaelic:</p>
          <p style={PStyle}>Word for word:</p>
        </Grid>
        {length.map((word, index) => {
          console.log(index);
          return (
            <Grid item>
              <p style={PStyle}>{en.split(" ")[index]}</p>
              <p style={PStyle}>
                <b>{gd.split(" ")[index]}</b>
              </p>
              <p style={PStyle}>
                <em>{lit.split(" ")[index]}</em>
              </p>
            </Grid>
          );
        })}
      </Grid>
  );
};
