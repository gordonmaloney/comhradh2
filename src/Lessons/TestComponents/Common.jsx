import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

//functions
export const cleanText = (str) => {
  if (str) {
    return (
      str
        //make lower case
        .toLowerCase()
        //remove punctuation
        .replace(/[^\w\s]|_/g, " ")
        //remove double spaces
        .replace(/\s+/g, " ")
        //trim white space and start and end
        .trim()
    );
  }
};

export const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

//components
export const SubmitBtn = styled(Button)({
  position: "fixed",
  left: "50%",
  transform: "translate(-50%, 0)",
  width: "60vw",
  bottom: "20px",
});

export const AnswerBtn = styled(Button)({
  top: '20px',
  marginBottom: '20px',
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
});

