const Decisions = require("../models/Decisions");
const router = require("express").Router();

/*
router.get("/", async (req, res) => {
  try {
    let dec;
    dec = await Decisions.find();
    res.status(200).json(dec);
  } catch (err) {
    res.status(500).json(err);
  }
});
*/
router.post("/", async (req, res) => {
  
  const newResume = new Decisions(req.body)
  try {
    const savedResume = await newResume.save().then(result => { 
      res.send(result);
    })

    res.status(201).json(savedResume);
  } catch (err) {
    console.log(err)
    res.status(409).json(err);
  }
});
module.exports = router;
