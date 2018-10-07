require("./models"); // initialize models at top (here) to avoid import order error
const mongoose = require("mongoose");
const app = require("express")();
const bodyParser = require("body-parser");
const routes = require("./Routes");
const keys = require("./keys/dev");

mongoose.connect(
  keys.mongo_url,
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(">>> connected to database");
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(">>> listenning on Port : " + PORT);
});
