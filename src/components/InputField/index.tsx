import React from 'react';
import styles from './style.module.css';

const index: React.FC = () => {
  return (
    <form className={styles.input}>
      <input
        type='text'
        placeholder='Enter your task'
        className={styles.input__box}
      />
      <button className={styles.input_submit} type='submit'>
        Go
      </button>
    </form>
  );
};

export default index;
