import React from 'react';
import style from '../style.module.css';
import { Todo } from '../../model';
import TodoCard from '../TodoCard';

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todoList, setTodoList }) => {
  return (
    <div className={style.todoList}>
      {todoList.map(todo => (
        <TodoCard
          key={todo.id}
          todo={todo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
};

export default TodoList;
