import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; //these are required to link the redux with the redux extension installed in chrome
import thunk from "redux-thunk"//middleware for redux and the extension
import { todosReducers } from "./reducers/todosReducers";
import { tabReducer } from "./reducers/tabReducer";

const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;