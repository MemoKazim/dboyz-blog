const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/route");
const favicon = require("serve-favicon");
const PORT = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));
app.use("/", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`>> http://localhost:${PORT}`);
});
