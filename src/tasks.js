import { saveDB, getDB } from "./db.js";

export const saveTasks = async (tasks) => {
  await saveDB({ tasks });
};

export const getTasks = async () => {
  const db = await getDB();
  return db.tasks;
};