import React from 'react';
import css from "./filter.module.css";


export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};