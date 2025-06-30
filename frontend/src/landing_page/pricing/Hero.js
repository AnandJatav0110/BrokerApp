import React from "react";

function Hero() {
  return (
    <div className="container p-5 ">
      <div className="row text-center mb-5 border-bottom">
        <h1 className="mt-5">Pricing</h1>
        <h5 className="text-muted mt-3 mb-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </h5>
      </div>

      <div className="row mt-5">
        <div className="col-4 text-center mt-5">
          <img src="media/pricingEquity.svg" style={{ width: "%" }} />
          <h3>Free equity delivery</h3>
          <p className="text-muted">
            {" "}
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center mt-5">
          <img src="media/intradayTrades.svg" style={{ width: "%" }} />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 text-center mt-5">
          <img src="media/pricingEquity.svg" style={{ width: "%" }} />
          <h3>Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
