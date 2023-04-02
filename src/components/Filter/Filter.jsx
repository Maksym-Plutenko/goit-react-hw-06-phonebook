import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

import {setFilterStatus} from '../../redux/filterSlice';

import css from './Filter.module.css';

const Filter = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const changeHandler = event => {
    // console.log('changed!');
    const formValue = event.currentTarget.value;
    setName(formValue);
    // changeAction(formValue);
    dispatch(setFilterStatus(formValue));
  };

  return (
    <div className={css.container}>
      <strong>Find contacts by name</strong>
      <input
        id="filter"
        type="text"
        name="filter"
        value={name}
        onChange={changeHandler}
        className={css.input}
      />
    </div>
  );
};

// Filter.propTypes = {
//   changeAction: PropTypes.func,
// };

export { Filter };
