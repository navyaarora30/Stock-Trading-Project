import React, { useState, useContext } from "react";
import api from "../api/axiosInstance"; // ✅ shared axios instance

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      const res = await api.post("/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
      });
      console.log("Order placed:", res.data);
      closeSellWindow();
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Failed to place SELL order: " + (err.response?.data?.message || err.message));
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Estimated return ₹{(stockPrice * stockQuantity).toFixed(2)}</span>
        <div>
          <button className="btn btn-red" onClick={handleSellClick}>Sell</button>
          <button className="btn btn-grey" onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
