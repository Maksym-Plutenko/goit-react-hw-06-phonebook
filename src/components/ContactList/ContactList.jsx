import PropTypes from 'prop-types';

import { Contact } from './Contact/Contact';

import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(elem => (
        <li key={elem.id} className={css.element}>
          <Contact
            name={elem.name}
            number={elem.number}
            id={elem.id}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
};

export { ContactList };
