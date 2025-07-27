import React, { useState } from "react";
import {
  equityCharges,
  currencyCharges,
  commodityCharges,
} from "./ChargesData";
import "./Brokerage.css";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("Equity");

  const headersMap = {
    Equity: [
      "Equity Delivery",
      "Equity Intraday",
      "F&O - Futures",
      "F&O - Options",
    ],
    Currency: ["Futures", "Options"],
    Commodity: ["Futures", "Options"],
  };

  const dataMap = {
    Equity: equityCharges,
    Currency: currencyCharges,
    Commodity: commodityCharges,
  };

  const headers = headersMap[activeTab];
  const data = dataMap[activeTab];

  return (
    <div className="container mt-4">
      {/* Tabs */}
      <div className="brokerage-tabs fs-3 text-muted">
        {["Equity", "Currency", "Commodity"].map((tab) => (
          <div
            key={tab}
            className={`brokerage-tab ${tab === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Table */}
      <table className="brokerage-table fs-6 text-muted">
        <thead>
          <tr>
            <th> </th>
            {headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx}>
              <th>{row.label}</th>
              {headers.map((header, colIdx) => {
                const key = header
                  .toLowerCase()
                  .replace("equity ", "")
                  .replace("f&o - ", "")
                  .split(" ")[0]; // delivery, intraday, futures, options
                const cell = row[key];

                return (
                  <td
                    key={colIdx}
                    dangerouslySetInnerHTML={{ __html: cell || "-" }}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <p className="text-center fs-5">
        <a href="" style={{ textDecoration: "none" }}>
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </p>
      <h2 className="fs-3 mt-4 mb-5">Charges explained</h2>
      <div className="row fs-6 mb-4">
        <div className="col-6 text-muted">
          <h4 className="fs-6 mb-4">Securities/Commodities transaction tax</h4>
          <p>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h4 className="fs-6 mb-4">Transaction/Turnover Charges</h4>
          <p>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <h4 className="fs-6 mb-4">Call & trade</h4>
          <p>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h4 className="fs-6 mb-4">Stamp charges</h4>
          <p>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <h4 className="fs-6 mb-4">NRI brokerage charges</h4>
          <p>
            <ul>
              <li>₹100 per order for futures and options.</li>
              <li>
                For a non-PIS account, 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </p>
          <h4 className="fs-6 mb-4">Account with debit balance</h4>
          <p>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
          <h4 className="fs-6 mb-4">
            Charges for Investor's Protection Fund Trust (IPFT) by NSE
          </h4>
          <p>
            <ul>
              <li>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </li>
              <li>
                Options - ₹50 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
          </p>
          <h4 className="fs-6 mb-4">Margin Trading Facility (MTF)</h4>
          <p>
            <ul>
              <li>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </li>
              <li>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </ul>
          </p>
        </div>
        <div className="col-6 text-muted">
          <h4 className="fs-6 mb-4">GST</h4>
          <p>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <h4 className="fs-6 mb-4">SEBI Charges</h4>
          <p>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <h4 className="fs-6 mb-4">DP (Depository participant) charges</h4>
          <p>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <h4 className="fs-6 mb-4">Pledging charges</h4>
          <p>₹30 + GST per pledge request per ISIN.</p>
          <h4 className="fs-6 mb-4">AMC (Account maintenance charges)</h4>
          <p>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA, <a href="">Click here</a>
          </p>
          <p>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC, <a href="">Click here</a>
          </p>
          <h4 className="fs-6 mb-4">Corporate action order charges</h4>
          <p>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <h4 className="fs-6 mb-4">Off-market transfer charges</h4>
          <p>₹25 per transaction.</p>
          <h4 className="fs-6 mb-4">Physical CMR request</h4>
          <p>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <h4 className="fs-6 mb-4">Payment gateway charges</h4>
          <p>₹9 + GST (Not levied on transfers done via UPI)</p>
          <h4 className="fs-6 mb-4">Delayed Payment Charges</h4>
          <p>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account. <a href="">Learn more</a>.
          </p>
          <h4 className="fs-6 mb-4">
            Trading using 3-in-1 account with block functionality
          </h4>
          <p>
            <ul>
              <li>
                <b>Delivery & MTF Brokerage:</b> 0.5% per executed order.
              </li>
              <li>
                <b>Intraday Brokerage:</b> 0.05% per executed order.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <h4 className="text-muted fs-5 mt-4 mb-3">Disclaimer</h4>
      <p className="fs-6">
        For Delivery based trades, a minimum of ₹0.01 will be charged per
        contract note. Clients who opt to receive physical contract notes will
        be charged ₹20 per contract note plus courier charges. Brokerage will
        not exceed the rates specified by SEBI and the exchanges. All statutory
        and regulatory charges will be levied at actuals. Brokerage is also
        charged on expired, exercised, and assigned options contracts. Free
        investments are available only for our retail individual clients.
        Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
        (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
        contract value will be charged for contracts where physical delivery
        happens. For netted off positions in physically settled contracts, a
        brokerage of 0.1% will be charged.
      </p>
      <h2 className="fs-4 mt-5 mb-4">Charges for account opening</h2>
      <div className="table-container mb-5">
        <table className="custom-table w-100 text-muted">
          <thead>
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td>
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="fs-4 mt-5 mb-4">
        Charges for optional value added services
      </h2>
      <div className="table-container mb-5">
        <table className="custom-table w-100 text-muted">
          <thead>
            <tr>
              <th>Service</th>
              <th>Billing Frequency</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: ₹249 / ₹2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: ₹100 | SIP: ₹10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: ₹500 | Historical: ₹500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;
