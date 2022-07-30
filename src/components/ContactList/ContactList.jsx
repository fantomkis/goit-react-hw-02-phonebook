import React from 'react';
import s from './ContactList.module.css';

function ContactList({ contacts }) {
  return (
    <>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />

      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <p className={s.title}>{name}</p>
            <p className="">{number}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
