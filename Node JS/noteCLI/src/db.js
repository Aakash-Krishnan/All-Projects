import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, "../db.json");
console.log(dbPath);

export const getDb = async () => {
  try {
    const db = await fs.readFile(dbPath, "utf-8");
    return JSON.parse(db);
  } catch (err) {
    console.error("Error reading db.json: ", err);
  }
};

export const saveDb = async (db) => {
  await fs.writeFile(dbPath, JSON.stringify(db, null, 2));
  return db;
};

export const insertDb = async (note) => {
  const db = await getDb();
  db.notes.push(note);
  await saveDb(db);
  return note;
};
