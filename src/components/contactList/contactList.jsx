import React from 'react';
import { Contact } from "components/contacts/contacts";
import css from "./contactList.module.css";

export const ContactList = ({ contacts, handleDeleteBtnClick }) => (
  <ul className={css.contactList}>
    {contacts.map(({ name, number, id }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        number={number}
        handleDeleteBtnClick={handleDeleteBtnClick}
      />
    ))}
  </ul>
);