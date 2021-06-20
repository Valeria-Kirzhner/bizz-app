const users = require("./routes/users");
const auth = require("./routes/auth");
const cards = require("./routes/cards");
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3900;

// ** MIDDLEWARE ** //
const whitelist = [
  "http://localhost:3000",
  "http://localhost:3900",
  "https://bizz-app.heroku.com",
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

mongoose
  .connect("mongodb://localhost/biz_app_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(cors());
app.use(express.json()); // midelware that make all req & res in the app be JSON type only.

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/cards", cards);

http.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
