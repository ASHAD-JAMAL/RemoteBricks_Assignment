import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import todoReducer from "./todoSlice";
import employeeReducer from "./employeeSlice";

const rootReducer = combineReducers({
  todos: todoReducer,
  employees: employeeReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
