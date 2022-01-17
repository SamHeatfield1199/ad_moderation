const mongoose = require("mongoose");

const AdvertSchema = new mongoose.Schema(
  {
    publishDate: { type: Number, required: true },
    publishDateString: { type: String, required: true},
    ownerId: { type: Number, required: true },
    ownerLogin: { type: String, required: true },
    bulletinSubject: { type: String, required: true },
    bulletinText: { type: String, required: true },
    bulletinImagees: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Adverts", AdvertSchema);
