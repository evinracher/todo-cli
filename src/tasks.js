import { STATUS } from "./constants.js";
import { saveDB, getDB } from "./db.js";

export const saveTasks = async (tasks) => {
  await saveDB({ tasks });
};

export const getTasks = async () => {
  const db = await getDB();
  return db.tasks;
};

export const completeTask = async (number) => {
  const tasks = await getTasks();

  if (number >= tasks.length || number <= 0) {
    throw new Error("Task doesn't exist");
  }

  tasks[number - 1].status = STATUS.completed;
  await saveTasks(tasks);
};
