import React from "react";
import { TODO_STATUSES } from "../constants/TodoConstants";

export const TodoContext = React.createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = React.useState([]);
  const [showAddOption, setShowAddOption] = React.useState(false);
  const addTodo = (text) => {
    setTodos([...todos, { text, status: TODO_STATUSES.ACTIVE }]);
  };
  const deleteTodo = (id) => {
    const todoList = [...todos];
    todoList.splice(id, 1);
    setTodos(todoList);
  };
  const updateTodo = (id, text, status) => {
    const todoList = [...todos];
    if (text) {
      todoList[id] = { ...todoList[id], text };
    }
    if (status) {
      todoList[id] = { ...todoList[id], status };
    }
    setTodos(todoList);
  };
  return (
    <TodoContext.Provider
      value={{
        updateTodo,
        addTodo,
        deleteTodo,
        todos,
        showAddOption,
        setShowAddOption,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
