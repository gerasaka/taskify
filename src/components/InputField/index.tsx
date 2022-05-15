import React from 'react';
import styles from './style.module.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className={styles.input}>
      <input
        type='text'
        placeholder='Enter your task'
        className={styles.input__box}
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button className={styles.input_submit} type='submit'>
        Go
      </button>
    </form>
  );
};

export default InputField;
