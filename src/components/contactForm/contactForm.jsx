import React, { Component } from 'react';
import css from "./contactForm.module.css";

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleFormSubmit = (evt) => {
    evt.preventDefault();

    const name = evt.currentTarget.elements.name.value;
    const number = evt.currentTarget.elements.number.value;

    this.setState({ name: name, number: number });
    this.props.onSubmit({ name, number });
    evt.currentTarget.reset();
  };
  render() {
    return (
      <form className={css.contactForm} onSubmit={this.handleFormSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.contactInput}
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.contactInput}
            type="tel"
            name="number"
            placeholder="Enter phone number"
            required
          />
        </label>
        <button className={css.addContactBttn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}