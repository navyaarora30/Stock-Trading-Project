import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { DoughnutChart } from "./DoughnoutChart";
import GeneralContext from "./GeneralContext";

// ✅ Full watchlist hardcoded data
const initialData = [
  { name: "RELIANCE", price: 2600, percent: "+1.2%", isDown: false },
  { name: "TCS", price: 3400, percent: "-0.6%", isDown: true },
  { name: "INFY", price: 1450, percent: "+0.9%", isDown: false },
  { name: "ITC", price: 207.9, percent: "+0.8%", isDown: false },
  { name: "HDFCBANK", price: 1522.35, percent: "+1.5%", isDown: false },
  { name: "WIPRO", price: 577.75, percent: "-0.5%", isDown: true },
  { name: "SBIN", price: 430.2, percent: "+0.2%", isDown: false },
  { name: "TATAPOWER", price: 124.15, percent: "+1.1%", isDown: false },
  { name: "SGBMAY29", price: 4719.0, percent: "-0.1%", isDown: true },
  { name: "HINDUNILVR", price: 2417.4, percent: "+0.4%", isDown: false },
  { name: "KPITTECH", price: 266.45, percent: "+0.7%", isDown: false },
  { name: "BHARTIAIRTEL", price: 541.15, percent: "+2.0%", isDown: false },
];

const WatchList = () => {
  const [watchlist] = useState(initialData);

  const labels = watchlist.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((item) => item.price),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#C9CBCF",
          "#A6CEE3",
          "#B2DF8A",
          "#FDBF6F",
          "#CAB2D6",
          "#FB9A99",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      {watchlist.length > 0 && <DoughnutChart data={data} />}
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);
  const generalContext = React.useContext(GeneralContext);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && (
        <span className="actions">
          <Tooltip
            title="Buy (B)"
            placement="top"
            arrow
            TransitionComponent={Grow}
            onClick={() => generalContext.openBuyWindow(stock.name)}
          >
            <button className="buy">Buy</button>
          </Tooltip>

          <Tooltip
            title="Sell (S)"
            placement="top"
            arrow
            TransitionComponent={Grow}
            onClick={() => generalContext.openSellWindow(stock.name)}
          >
            <button className="sell">Sell</button>
          </Tooltip>

          <Tooltip title="Analytics" placement="top" arrow TransitionComponent={Grow}>
            <button className="action">
              <BarChartOutlined className="icon" />
            </button>
          </Tooltip>

          <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
            <button className="action">
              <MoreHoriz className="icon" />
            </button>
          </Tooltip>
        </span>
      )}
    </li>
  );
};
