const router = require("express").Router();
const Finance = require("../models/finance.model");
router.post("/create", (req, res) => {
  let value;
  if (req.body.type == "expense") {
    value = -req.body.value;
  } else {
    value = req.body.value;
  }
  let newFinance = new Finance({ ...req.body, value: value });
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
router.get("/get/total/liquid/:id", async (req, res) => {
  let currentMonth = req.params.id;
  let aggregatedByMonth = await Finance.aggregate([
    {
      $addFields: {
        month: { $month: "$date" },
      },
    },
    {
      $group: { _id: "$month", total: { $sum: "$value" } },
    },
  ]);
  let currentMonthTotal = aggregatedByMonth.filter(
    (month) => month._id == currentMonth
  );
  res.json(currentMonthTotal);
});
router.get("/get/total/income/:id", async (req, res) => {
  let currentMonth = req.params.id;
  let aggregatedByMonth = await Finance.aggregate([
    {
      $addFields: {
        month: { $month: "$date" },
      },
    },
    {
      $match: { type: "income" },
    },
    {
      $group: { _id: "$month", total: { $sum: "$value" } },
    },
  ]);
  let currentMonthTotal = aggregatedByMonth.filter(
    (month) => month._id == currentMonth
  );
  res.json(currentMonthTotal);
});
router.get("/get/total/expenses/:id", async (req, res) => {
  let currentMonth = req.params.id;
  let aggregatedByMonth = await Finance.aggregate([
    {
      $addFields: {
        month: { $month: "$date" },
      },
    },
    {
      $match: { type: "expense" },
    },
    {
      $group: { _id: "$month", total: { $sum: "$value" } },
    },
  ]);
  let currentMonthTotal = aggregatedByMonth.filter(
    (month) => month._id == currentMonth
  );
  res.json(currentMonthTotal);
});
module.exports = router;
