const initialState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CREATE_PROJECT":
      console.log(type, payload);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("object");
      return state;

    default:
      return state;
  }
};
