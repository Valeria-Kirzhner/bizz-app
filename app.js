const users = require("./routes/users");
const auth = require("./routes/auth");
const cards = require("./routes/cards");
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");
const path = require("path");
const favicon = require("serve-favicon");

const PORT = process.env.PORT || 3900;

// ** MIDDLEWARE ** //
const whitelist = [
  "http://localhost:3000",
  "http://localhost:3900",
  "https://bizz-app.heroku.com",
];
/* const corsOptions = {
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
}; */

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/biz_app_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.static(__dirname)); // no static directory, because all static :)
app.use(express.json()); // midelware that make all req & res in the app be JSON type only.
app.use(favicon(path.join(__dirname, "client/build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/auth/", auth);
app.use("/users/", users);
app.use("/cards/", cards);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

http.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
