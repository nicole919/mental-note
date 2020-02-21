import React from "react";

export default React.createContext({
  noteList: [],
  toggle: false,
  API: "https://boiling-tor-85532.herokuapp.com/api",
  addNote: () => {},
  deleteNote: () => {},
  addCategory: () => {},
  deleteCategory: () => {},
  toggleErrors: () => {},
  throwError: () => {}
});
