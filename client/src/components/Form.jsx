import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { addNewTodo } from '../redux/actions';

const Form = () => {
    const [newTodo, setNewTodo] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(newTodo));

        setNewTodo('');
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input placeholder="Enter new Todo..." value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        </form>
    )
}

export default Form;