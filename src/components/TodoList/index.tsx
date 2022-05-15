import React from 'react';
import style from './style.module.css';
import { Todo } from '../../model';

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todoList, setTodoList }) => {
  return (
    <div className={style.todoList}>
      {todoList.map(todo => (
        <li>{todo.todo}</li>
      ))}
    </div>
  );
};

export default TodoList;
