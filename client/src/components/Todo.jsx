import React, { useState } from 'react';
import { toggleTodo, updateTodo,deleteTodo } from "../redux/actions";
import { useDispatch } from 'react-redux';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.data);

    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
        dispatch(updateTodo(todo._id, text));
    }

    return (
        <li className="task"
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo.done ? "line-through" : "",
                backgroundColor: todo.done ? "green" : "blue",
            }}
        >
            <span style={{ display: editing ? 'none' : '' }}>
                {todo.data}
            </span>

            <form style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}
            >
                <input type="text" value={text} className="edit-todo" onChange={(e) => setText(e.target.value)} />
            </form>

            <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                <i className="fas fa-trash" />
            </span>

            <span className="icon" onClick={() => setEditing(!editing)}>
                <i className="fas fa-pen" />
            </span>
        </li>
    )
}

export default Todo