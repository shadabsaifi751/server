import authRoutes from "./Routes/Auth.js";
import bodyParser from "body-parser";

// const express = require('express');
import express from "express";
const app = express();
// const cors = require('cors');
import cors from "cors"
// const mongooes = require('mongoose');
import mongoose from "mongoose";



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// mongooes.connect('mongodb://localhost:27017/mern-stack-app')
const url = `mongodb+srv://Ragisterapp:shadab123@cluster0.71hkugq.mongodb.net/Collection?retryWrites=true&w=majority`
// mongooes.connect(`mongodb+srv://Ragisterapp:shadab123@cluster0.71hkugq.mongodb.net/Collection?retryWrites=true&w=majority`)
const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => res.send(`Hello my brother`));

//auth routes
app.use("/api",authRoutes)



mongoose
.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
  app.listen(PORT, () => {
      console.log("server started on 4000");
  }))
  .then(() => console.log(`Server is running on ${PORT}`))
  .catch((err) => console.log(err));
