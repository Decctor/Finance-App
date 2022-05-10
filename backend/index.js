const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database foi conectado com sucesso");
});
const financeRouter = require("./routes/finance");
app.use(express.json());
app.use(cors());
app.use("/finance", financeRouter);

app.listen(3001, () => console.log("SERVIDOR ONLINE"));
