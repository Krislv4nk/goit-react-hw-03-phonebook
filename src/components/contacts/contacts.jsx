import React from 'react';
import css from "./contacts.module.css";

export const Contact = ({ id, name, number, handleDeleteBtnClick }) => (
  <li className={css.contactItem}>
    <p className={css.contactText}>
      <span className={css.contactName}>{name}:</span>
      <span>{number}</span>
    </p>
    <button
      className={css.deleteContactBttn}
      type="button"
      onClick={() => handleDeleteBtnClick(id)}
    >
      Delete
    </button>
  </li>
);