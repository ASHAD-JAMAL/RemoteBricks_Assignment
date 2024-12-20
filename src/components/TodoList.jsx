import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/todoSlice";
import { FaPlus, FaTrashAlt, FaEdit, FaSave } from "react-icons/fa"; // React Icons for better performance

const TodoList = () => {
  const [todoText, setTodoText] = useState("");
  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState(null);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText("");
    }
  };

  const handleUpdateTodo = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }));
      setEditingId(null);
      setEditText("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Todo List
      </h1>
      <div className="flex items-center space-x-3 mb-6">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTodo}
          className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          <FaPlus />
        </button>
      </div>

      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm"
          >
            {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className="text-gray-700 text-lg">{todo.text}</span>
            )}
            <div className="flex space-x-2">
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-red-500 hover:text-red-600"
              >
                <FaTrashAlt />
              </button>
              {editingId === todo.id ? (
                <button
                  onClick={() => handleUpdateTodo(todo.id)}
                  className="text-green-500 hover:text-green-600"
                >
                  <FaSave />
                </button>
              ) : (
                <button
                  onClick={() => setEditingId(todo.id)}
                  className="text-yellow-500 hover:text-yellow-600"
                >
                  <FaEdit />
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
