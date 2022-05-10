const router = require("express").Router();
const Finance = require("../models/finance.model");
router.post("/create", (req, res) => {
  console.log(req.body);
  let newFinance = new Finance({ ...req.body });
  newFinance
    .save()
    .then((finance) => res.json(finance))
    .catch((err) => res.send("err"));
});
module.exports = router;
