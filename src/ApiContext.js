import React from "react";

export default React.createContext({
  noteList: [],
  toggle: false,
  API: "http://localhost:9090",
  addNote: () => {},
  deleteNote: () => {},
  addCategory: () => {},
  deleteCategory: () => {},
  toggleErrors: () => {},
  throwError: () => {}
});
