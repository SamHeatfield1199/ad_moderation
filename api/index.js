const express = require("express");
const app = express();
const mongooes = require("mongoose");
const dotenv = require("dotenv");

const advertRoute = require("../api/routes/adverts");
const decRoute = require("../api/routes/decisions");

const cors = require("cors");
dotenv.config();

mongooes
  .connect(
    "mongodb+srv://sam_heatfield:namikadze99@cluster0.6onb0.mongodb.net/ecommerce?retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(process.env.PORT || 5000, () => {
      console.log("Back server");
    })
  )
  .catch((e) => {
    console.log(e);
  });


app.use(cors());
app.use(express.json());

app.use("/api/adverts", advertRoute);
app.use("/api/decisions", decRoute);
