require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3003;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// GET all holdings
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

// GET all positions
app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// POST new order (BUY / SELL)
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    if (mode === "SELL") {
      const totalQtyHeld = await OrdersModel.aggregate([
        {
          $match: { name, mode: "BUY" },
        },
        {
          $group: {
            _id: null,
            totalQty: { $sum: "$qty" },
          },
        },
      ]);
      const total = totalQtyHeld.length > 0 ? totalQtyHeld[0].totalQty : 0;
      if (qty > total) {
        return res
          .status(400)
          .send(
            `Failed to place SELL order: Not enough quantity to sell. You have ${total}`
          );
      }
    }
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).send("Order saved!");
  } catch (err) {
    console.error("Order save error:", err);
    res.status(500).send("Failed to save order");
  }
});

mongoose
  .connect(url)
  .then(() => {
    console.log("DB connected!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
