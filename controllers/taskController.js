const taskService = require("../services/taskService");

//create
exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const task = await taskService.createTask(title);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//view all
exports.getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//update
exports.updateTasks = async (req, res) => {
  try {
    const tasks = await taskService.updateTasks(req.params.id, req.body);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//delete
exports.deleteTasks = async (req, res) => {
  try {
    await taskService.deleteTasks(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
