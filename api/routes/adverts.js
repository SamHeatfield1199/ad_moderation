const Adverts = require("../models/Adverts");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    let adverts;
    adverts = await Adverts.find();
    res.status(200).json(adverts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;