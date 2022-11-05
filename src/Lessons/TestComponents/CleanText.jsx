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