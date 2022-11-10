import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { shuffleArray } from "./Common";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Grid } from "@mui/material";

export const TestFrame = ({ questions }) => {
  //handle index
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < shuffledQuestions.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  //shuffle questions
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  useEffect(() => {
    setShuffledQuestions(shuffleArray(questions));
  }, [questions]);

  //progress bar
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(index * (100 / (shuffledQuestions.length - 1)));
  }, [index]);

  return (
    <div>
      <br />
      <br />
      <Box
        sx={{
          width: "95%",
          mx: "auto",
          height: "0px",
          marginBottom: "5px",
          color: "#00842a",
        }}
      >
        <LinearProgress
          color="inherit"
          variant="determinate"
          value={progress}
        />
      </Box>

      <Grid
        sx={{ width: "95%", mx: "auto", mt: '15px' }}
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Button
            sx={{
              float: "left",
              marginTop: "5px",
              backgroundColor: "#d1f0d9",
              borderRadius: "10px",
              padding: "5px 10px",
              border: "1px solid black",
              fontWeight: "600",
              color: "black",
              "&:hover": {
                color: "black",
                backgroundColor: "#ece9e9",
              },
            }}
            disabled={!(index > 0)}
            onClick={handlePrev}
          >
            back
          </Button>
        </Grid>

        <Grid item>
          {" "}
          <center>
            {index + 1}/{shuffledQuestions.length}
          </center>
        </Grid>

        <Grid item>
          {" "}
          {index < shuffledQuestions.length - 1 ? (
            <Button
              sx={{
                float: "right",
                marginTop: "5px",
                backgroundColor: "#d1f0d9",
                borderRadius: "10px",
                padding: "5px 10px",
                border: "1px solid black",
                fontWeight: "600",
                color: "black",
                "&:hover": {
                  color: "black",
                  backgroundColor: "#ece9e9",
                },
              }}
              onClick={handleNext}
            >
              next
            </Button>
          ) : (
            <Button
              sx={{
                float: "right",
                marginTop: "5px",
                backgroundColor: "#d1f0d9",
                borderRadius: "10px",
                padding: "5px 10px",
                border: "1px solid black",
                fontWeight: "600",
                color: "black",
                "&:hover": {
                  color: "black",
                  backgroundColor: "#ece9e9",
                },
              }}
              onClick={() => {}}
            >
              Finish
            </Button>
          )}
        </Grid>
      </Grid>

      <Box sx={{ width: "80%", mx: "auto" }}>
        <center>{shuffledQuestions[index]}</center>
      </Box>
    </div>
  );
};
