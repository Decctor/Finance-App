const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const financeSchema = new Schema(
  {
    description: { type: String, required: true },
    value: { type: Number },
    type: { type: String, enum: ["expense", "income"] },
  },
  {
    timestamps: true,
  }
);
const Finance = mongoose.model("Finance", financeSchema);
module.exports = Finance;
