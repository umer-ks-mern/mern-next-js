import {todoModal} from "../modal/todo.js";

const todoController = {
    getAllTasks: async (req, res) => {
        const tasks = await todoModal.find();
        return res.json(tasks);
    },

    getTaskById: async (req, res) => {
        const taskId = req.params.id;
        const task = await todoModal.findOne({ id: taskId });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        return res.json(task);
    },

    createTask: async (req, res) => {
        //this below line is destructuring
        const { id, title, description } = req.body;
        const newTask = {
            id: id,
            title: title,
            description: description,
            completed: false,
        };

        await todoModal.create(newTask)
         
        res.status(201).json(newTask);
    },
    updateTask: async (req, res) => {
        const taskId = req.params.id;
        const { title, description, completed } = req.body;

        try {
            const updatedTask = await todoModal.findOneAndUpdate(
                { id: taskId },
                {
                    $set: {
                        title: title,
                        description: description,
                        completed: completed
                    }
                },
                { new: true }
            );

            if (!updatedTask) {
                return res.status(404).json({ message: "Task not found" });
            }

            res.json(updatedTask);
        } catch (error) {
            console.error("Error updating task:", error);
            res.status(500).json({ message: "Error updating task" });
        }
    },

    deleteTask: async (req, res) => {
        const taskId = req.params.id;

        try {
            const deletedTask = await todoModal.findOneAndDelete({ id: taskId });

            if (!deletedTask) {
                return res.status(404).json({ message: "Task not found" });
            }

            res.json(deletedTask);
        } catch (error) {
            console.error("Error deleting task:", error);
            res.status(500).json({ message: "Error deleting task" });
        }
    }
};

export default todoController;