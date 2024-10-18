import { insertDb, saveDb, getDb } from "./db.js";

export const newNote = async (tags, note) => {
  try {
    const newNote = {
      tags,
      id: Date.now(),
      content: note,
    };

    await insertDb(newNote);
    return newNote;
  } catch (err) {
    console.log(err);
  }
};

export const getAllNotes = async () => {
  try {
    const { notes } = await getDb();
    return notes;
  } catch (err) {
    console.log(err);
  }
};

export const filterNotes = async (filter) => {
  try {
    const { notes } = await getDb();
    return notes.filter((note) =>
      note.content.toLowerCase().includes(filter.toLowerCase())
    );
  } catch (err) {
    console.log(err);
  }
};

export const removeNote = async (id) => {
  try {
    const { notes } = getDb();
    const match = notes.find((note) => note.id === id);

    if (match) {
      const newNote = notes.filter((note) => note.id !== id);
      await saveDb({ notes: newNote });
      return id;
    }
  } catch (err) {
    console.log(err);
  }
};

export const removeAllNotes = () => saveDb({ notes: [] });
