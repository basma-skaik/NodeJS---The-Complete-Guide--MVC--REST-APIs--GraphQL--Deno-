const path = require("path");

const expess = require("express");
const bodyParser = require("body-parser");

const rootDir = require("./util/path");

const app = expess();

const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expess.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "not-found.html"));
});

app.listen(3000);
