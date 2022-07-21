import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const app = express();
const URI = `mongodb+srv://PouriaRezaei:${process.env.mongodb_pass}@cluster0.uxmyd.mongodb.net/MernPractice?retryWrites=true&w=majority`;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/api/test", (req, res) => {
  res.json({data: "sample data"});
});

mongoose
  .connect(URI)
  .then(() =>
    app.listen(4000, () => {
      console.log("Server is running successfully...");
    })
  )
  .catch((err) => console.log(err));
