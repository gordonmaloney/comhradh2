import React, { useState } from "react";

import { One } from "./Lessons/One";
import { Two } from "./Lessons/Two";
import { Three } from "./Lessons/Three";

import Grid from "@mui/material/Grid";

export const Frame = () => {
  const [Display, setDisplay] = useState("");
  const Lessons = ["One", "Two", 'Three'];

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <center>
            <h2>Comhradh lessons</h2>
          </center>
        </Grid>

        <Grid item xs={12} sm={2}>
          <div style={{ borderRight: "1px solid black", paddingRight: '5px' }}>
            <ul>
              {Lessons.map((lesson) => (
                <li 
                  style={{backgroundColor: Display == lesson && 'lightgreen'}}
                  key={lesson} onClick={() => setDisplay(lesson)}>
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={10}>
          <div style={{padding: '20px'}}>
            {Display == "" && <>Pick a lesson...</>}
            {Display == "One" && <One />}
            {Display == "Two" && <Two />}
            {Display == "Three" && <Three />}

          </div>
        </Grid>
      </Grid>
    </div>
  );
};
