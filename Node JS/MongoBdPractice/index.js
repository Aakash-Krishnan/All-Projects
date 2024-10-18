const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://mrsky:MK8KYX0zCAKT0t9K@practicecluster.fbtiuvn.mongodb.net/book_store?retryWrites=true&w=majority&appName=PracticeCluster"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

app.listen(8000, () =>
  console.log("Server is running on  http://localhost:8000")
);
