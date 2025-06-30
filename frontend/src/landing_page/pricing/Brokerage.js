import React from "react";

function Brokerage() {
  return (
    <div className="container border-top mb-5 ">
      <div className="row ">
        <div className="col-7 mt-5">
          <h5 className="text-center ">
            <a style={{ textDecoration: "none" }} href="">
              Brokerage calculator
            </a>
          </h5>
          <ul className=" mt-3 " style={{ fontSize: "12px" }}>
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="mt-2">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mt-2">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mt-2">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="mt-2">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mt-2">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-5 text-center mt-5">
          <h5 className="text-center ">
            <a style={{ textDecoration: "none" }} href="">
              List of charges
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
