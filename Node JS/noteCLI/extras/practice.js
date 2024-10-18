import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
// import * as utils from "./utils";

// console.log("Hello world");
//   console.log(new URL("./package.json", import.meta.url));
//   console.log(file);
//   console.log(pjsonPath);

const readPjson = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  console.log("Dirname: ", __dirname);

  const pjsonPath = path.join(__dirname, "package.json");
  console.log("package json file path: ", pjsonPath);

  try {
    const pjsonData = await fs.readFile(pjsonPath, "utf8");
    console.log(pjsonData);
  } catch (err) {
    console.log(err);
  }
};

const writeFile = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  console.log(__dirname);
  const newFile = path.join(__dirname, "/demo.js");
  console.log(newFile);
  await fs.writeFile(newFile, `console.log("Hello New File")`);
};

// readPjson();
writeFile();
