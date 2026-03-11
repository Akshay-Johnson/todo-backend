const Task = require("..//models/taskModel");

//create
exports.createTask = async (title) => {
  return await Task.create({ title });
};

//view all
exports.getTasks = async () => {
  return await Task.findAll({ order: [["createdAt", "DESC"]] });
};

//update
exports.updateTasks = async (id, data) => {
  const task = await Task.findByPk(id);
  if (!task) {
    throw new Error("Task not found");
  }
  return await task.update(data);
};

//delete
exports.deleteTasks = async (id) => {
  const task = await Task.findByPk(id);

  if (!task) {
    throw new Error("Task not found");
  }
  await task.destroy();
};
