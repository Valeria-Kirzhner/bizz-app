const users = require("./routes/users");
const auth = require("./routes/auth");
const cards = require("./routes/cards");
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/biz_app_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(cors());
app.use(express.json()); // midelware that make all req & res in the app be JSON type only.

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/cards", cards);

const port = 3900;
http.listen(port, () => console.log(`Listening on port ${port}...`));
