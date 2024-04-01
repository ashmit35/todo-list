import todo from '../model/Todo.js';

export const addTodo = async (req, res) => {
    try {
        const newTodo = new todo({
            data: req.body.data,
            createdAt: Date.now()
        })

        await newTodo.save();
        return res.status(200).json(newTodo);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getAllTodos = async (req, res) => {
    try {
        const todos = await todo.find({}).sort({ createdAt: -1 });
        return res.status(200).json(todos);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const toggleTodoDone = async (req, res) => {
    try {
        const currTodo = await todo.findById(req.params.id);
        const tempTodo = await todo.findOneAndUpdate(
            { _id: req.params.id },
            { done: !currTodo.done }
        )

        await tempTodo.save();
        return res.status(200).json(tempTodo);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const updateTodo = async (req, res) => {
    try {
        await todo.findOneAndUpdate(
            { _id: req.params.id },
            { data: req.body.text }
        )

        const tempTodo = await todo.findById(req.params.id);

        return res.status(200).json(tempTodo);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}


export const deleteTodo = async (req, res) => {
    try {
        const tempTodo = await todo.findByIdAndDelete(req.params.id);

        return res.status(200).json(tempTodo);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}   