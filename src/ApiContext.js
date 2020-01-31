import React from "react";

export default React.createContext({
  noteList: [],
  toggle: false,
  API: "http://localhost:8000",
  addNote: () => {},
  deleteNote: () => {},
  addCategory: () => {},
  deleteCategory: () => {},
  toggleErrors: () => {},
  throwError: () => {}
});
//https://boiling-tor-85532.herokuapp.com/api
