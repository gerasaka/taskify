import React from 'react';
import { Todo } from '../../model';
import style from './style.module.css';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineDone } from 'react-icons/md';

interface Props {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard: React.FC<Props> = ({ todo, todoList, setTodoList }) => {
  return (
    <form className={style.todo__single}>
      <span className={style.todo__single_text}>{todo.todo}</span>
      <div>
        <span className={style.icon}>
          <FiEdit3 />
        </span>
        <span className={style.icon}>
          <AiOutlineDelete />
        </span>
        <span className={style.icon}>
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;
