import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { newNote, getAllNotes, filterNotes } from "./notes.js";

const listNotes = (notes) => {
  notes.forEach((note) => {
    console.log("\n");
    console.log("id: ", note.id);
    console.log("tags: ", note.tags.join(", ")),
      console.log("note: ", note.content);
  });
};

yargs(hideBin(process.argv))
  .command({
    command: "greet",
    describe: "Greet the user",
    builder: {
      name: {
        alias: "n",
        describe: "Name of the user to greet",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      console.log(`Hello, ${argv.name}!`);
    },
  })
  .command({
    command: "new <note>",
    describe: "create a new note",
    builder: {
      name: {
        describe: "The content of the note you want to create",
        type: "string",
      },
    },
    handler: async (argv) => {
      const tags = argv.tags ? argv.tags.split(",") : [];
      const note = await newNote(tags, argv.note);
      console.log("Note added!", note.id, note);
    },
  })
  .option("tags", {
    alias: "t",
    describe: "Tags for the note",
    type: "string",
  })
  .command({
    command: "all",
    describe: "Get all notes",
    handler: async () => {
      const notes = await getAllNotes();
      console.log(notes);
    },
  })
  .command({
    command: "find <filter>",
    describe: "get matching notes",
    builder: {
      name: {
        describe:
          "The search term to filter notes by, will be applied to note.content",
        type: "string",
      },
    },
    handler: async (argv) => {
      const notes = await filterNotes(argv.filter);
      listNotes(notes);
    },
  })
  .demandCommand(1)
  .parse();
