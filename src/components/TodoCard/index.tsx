import React, { useState } from 'react';
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const hanleDelete = (id: number) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    );
    setEdit(false);
  };

  return (
    <form className={style.todo__single} onSubmit={e => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          className={style.todo__single_text}
          onChange={e => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className={style.todo__single_text}>{todo.todo}</s>
      ) : (
        <span className={style.todo__single_text}>{todo.todo}</span>
      )}

      <div>
        <span
          className={style.icon}
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <FiEdit3 />
        </span>
        <span className={style.icon} onClick={() => hanleDelete(todo.id)}>
          <AiOutlineDelete />
        </span>
        <span className={style.icon} onClick={() => handleDone(todo.id)}>
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;
