const expess = require("express");

const path = require("path");

const routDir = require("../../Ass03/util/path");

const router = expess.Router();

router.get("/user", (req, res, next) => {
  res.sendFile(path.join(routDir, "views", "user.html"));
});

module.exports = router;
