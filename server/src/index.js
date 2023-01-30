const express = require("express");
const path = require("path");
const db = require("./config/db");
const methodOverride = require("method-override");
const app = express();
const port = 3001;
const route = require("./routes");
var cors = require("cors");
app.use(cors());

// connect DB
db.connect();

// public
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

// route innit
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
