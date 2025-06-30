import React from "react";

function Price() {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-4">
          <h2 className="mb-3">Unbeatable pricing</h2>
          <p className="mt-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges
          </p>
          <a href="" className="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div className="col-6 text-center border">
              <h1>₹0</h1>
              <p className="mt-3">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col-6  text-center border">
              <h1>₹20</h1>
              <p className="mt-3">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
