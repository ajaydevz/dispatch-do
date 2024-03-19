import { createContext } from "react";
import { todoReducer } from '../context/todoReducer';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = usereducer(todoReducer, []);

    return (
        <TodoContext.Provider value={{ todos,dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};