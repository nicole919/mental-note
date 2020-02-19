import React from "react";

export const getNotesForCategories = (notes = [], category_id) =>
  !category_id ? notes : notes.filter(note => note.category_id === category_id);

export function Button({ className, ...props }) {
  return <button className={["Button", className].join(" ")} {...props} />;
}

export function Input({ className, ...props }) {
  return <input className={["Input", className].join(" ")} {...props} />;
}

export function Textarea({ className, ...props }) {
  return <textarea className={["Textarea", className].join(" ")} {...props} />;
}

export function Required({ className, ...props }) {
  return (
    <span className={["Required", className].join(" ")} {...props}>
      &#42;
    </span>
  );
}
