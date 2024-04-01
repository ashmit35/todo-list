import axios from "axios"
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from "./types";

const API_URL = "http://localhost:8000";

export const addNewTodo = (data) => async (dispatch) => {

    try {
        const response = await axios.post(`${API_URL}/todos`, { data })
        dispatch({ type: ADDNEW_TODO, payload: response.data });

    } catch (error) {
        console.log(`Error while adding new Todo: ${error.message}`)
    }
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/todos`);
        dispatch({ type: GETALL_TODO, payload: response.data });

    } catch (error) {
        console.log(`Error while fetching all todos: ${error.message}`)
    }
}


export const toggleTodo = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/todos/${id}`);
        dispatch({ type: TOGGLE_TODO, payload: response.data });

    } catch (error) {
        console.log(`Error while toggling Todo: ${error.message}`)
    }
}

export const updateTodo = (id, text) => async (dispatch) => {
    try {
        const response = await axios.put(`${API_URL}/todos/${id}`, { text });
        dispatch({ type: UPDATE_TODO, payload: response.data });

    } catch (error) {
        console.log(`Error while updating Todo: ${error.message}`)
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(`${API_URL}/todos/${id}`);
        dispatch({ type: DELETE_TODO, payload: response.data });

    } catch (error) {
        console.log(`Error while deleting Todo: ${error.message}`)
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    try {
        dispatch({ type: TOGGLE_TAB, selected: tab });

    } catch (error) {
        console.log(`Error while toggling Todo: ${error.message}`);
    }
}