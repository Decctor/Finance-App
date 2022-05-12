const router = require("express").Router();
const Finance = require("../models/finance.model");
router.post("/create", (req, res) => {
  let newFinance = new Finance({ ...req.body });
  newFinance
    .save()
    .then((finance) => res.json(finance))
    .catch((err) => res.send("err"));
});
router.get("/get", (req, res) => {
  Finance.find().then((finances) => res.json(finances));
});
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  Finance.findByIdAndDelete(id).then(res.send("Removido com sucesso."));
});
router.get("/getTotal", async (req, res) => {
  /*     {
      $project: {
        month: { $month: "$date" },
        type: { $type: "$type" },
        value: 1,
      },
    },
    {
      $group: {
        _id: { month: "$month", type: "$type" },
        total: { $sum: "$value" },
      },
    }, */

  /*    {
      $match: { type: "expense" },
    },
    {
      $group: {
        _id: { $month: "$date" },
        total: { $sum: "$value" },
      },
    },*/
  let expenses = await Finance.aggregate([
    {
      $match: { type: "expense" },
    },
    {
      $group: {
        _id: { $month: "$date" },
        total: { $sum: "$value" },
      },
    },
  ]);
  let incomes = await Finance.aggregate([
    {
      $match: { type: "income" },
    },
    {
      $group: {
        _id: { $month: "$date" },
        total: { $sum: "$value" },
      },
    },
  ]);

  res.json(expenses);
});
module.exports = router;
