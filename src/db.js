import fs from "node:fs/promises";

const DB_URL = new URL("../db.json", import.meta.url).pathname;

export const getDB = async () => {
  const file = await fs.readFile(DB_URL, "utf-8");
  const db = JSON.parse(file);

  return db;
};

export const saveDB = async (db) => {
  const content = JSON.stringify(db, null, 2);
  await fs.writeFile(DB_URL, content);
};
