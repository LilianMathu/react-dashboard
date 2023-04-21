import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import config from "../config";

const app = express();

// setup cors
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

// install middleware
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// db connection
const db = config.mongo_uri;

const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Db!");
  } catch (error) {
    console.log("Failed to connect to Db!");
  }
};

connectDb();

// Install routes
// app.use();

export default app;
