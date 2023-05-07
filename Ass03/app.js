const express = require("express");

const path = require("path");

const mainRoute = require("../Ass03/routes/main");
const userRoute = require("../Ass03/routes/user");

const app = express();

app.use(express.static(path.join(__dirname, "../", "Ass03", "public")));

app.use(mainRoute);
app.use(userRoute);

app.listen(5000, () => {
  console.log("server is listinig!");
});
