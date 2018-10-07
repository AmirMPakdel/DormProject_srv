const app = require("express")();
const bodyParser = require("body-parser");
const routes = require("./Routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(ServerConsts.Port, () => {
  console.log("Listenning on Port : " + PORT);
});
