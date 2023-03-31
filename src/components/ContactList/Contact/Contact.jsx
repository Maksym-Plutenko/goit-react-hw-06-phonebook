import PropTypes from 'prop-types';

import css from './Contact.module.css';

const Contact = ({ name, number, id, onDelete }) => {
  const clickHandler = event => {
    onDelete(event.currentTarget.id);
  };

  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        id={id}
        onClick={clickHandler}
        className={css.button}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { Contact };
