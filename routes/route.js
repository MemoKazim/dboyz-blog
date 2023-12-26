const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/home");
});
router.get("/home", (req, res) => {
  res.render("homepage");
});

router.get("/about", (req, res) => {
  res.render();
});

module.exports = router;
