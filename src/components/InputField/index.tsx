import React, { useRef } from 'react';
import styles from '../style.module.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className={styles.input}
      onSubmit={e => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type='text'
        placeholder='Enter your task'
        className={styles.input__box}
        ref={inputRef}
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
