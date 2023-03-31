import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      const savedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (savedContacts) {
        setContacts(savedContacts);
      }

      setMounted(true);
    }
  }, [contacts, mounted]);

  const addContact = contact => {
    const nameList = contacts.map(cont => cont.name);
    if (nameList.includes(contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    contact.id = nanoid();
    const newContacts = [...contacts, contact];
    setContacts(newContacts);
  };

  const formContactList = filter => {
    const newContactList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return newContactList;
  };

  const deleteContact = contactId => {
    const newContacts = contacts.filter(cont => cont.id !== contactId);
    setContacts(newContacts);
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
      <ContactForm submitAction={addContact} />
      <h2>Contacts</h2>
      <Filter changeAction={setFilter} />
      <ContactList
        contacts={formContactList(filter)}
        onDelete={deleteContact}
      />
    </div>
  );
};

export { App };
