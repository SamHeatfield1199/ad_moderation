const mongoose = require("mongoose");

const DecisionsSchema = new mongoose.Schema(
  {
    advertID: { type: String, required: true },
    decision: { type: String, required: true },
  },
  { timestamps: true }

);

module.exports = mongoose.model("Decisions", DecisionsSchema);
