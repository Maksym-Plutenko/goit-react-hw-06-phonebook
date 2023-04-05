import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../redux/selectors';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      const savedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (savedContacts) {
      }

      setMounted(true);
    }
  }, [contacts, mounted]);

  const formContactList = filter => {
    const newContactList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return newContactList;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={formContactList(filter)} />
    </div>
  );
};

export { App };
