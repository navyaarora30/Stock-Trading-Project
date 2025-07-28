import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);
  const [investment, setInvestment] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    async function fetchHoldings() {
      try {
        const res = await api.get("/allHoldings");
        setHoldings(res.data);

        let invest = 0;
        let current = 0;

        res.data.forEach((stock) => {
          invest += stock.avg * stock.qty;
          current += stock.price * stock.qty;
        });

        setInvestment(invest);
        setCurrentValue(current);
      } catch (err) {
        console.error("Error fetching summary:", err);
      }
    }

    fetchHoldings();
  }, []);

  const pnl = currentValue - investment;
  const pnlPercentage = ((pnl / investment) * 100).toFixed(2);
  const isProfit = pnl >= 0;

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={isProfit ? "profit" : "loss"}>
              {pnl.toFixed(2)}{" "}
              <small>{isProfit ? "+" : "-"}{Math.abs(pnlPercentage)}%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{currentValue.toFixed(2)}</span>{" "}
            </p>
            <p>
              Investment <span>{investment.toFixed(2)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
