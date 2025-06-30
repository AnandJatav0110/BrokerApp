import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 mb-5 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div className="row p-5  ">
        <div className="col-6 text-center text-muted">
          <img
            className=""
            src="media/nithinKamath.jpg"
            style={{ borderRadius: "50%", width: "50%" }}
          />
          <h4 className="mt-2">Nithin Kamath</h4>
          <p>Founder, CEO</p>
        </div>

        <div className="col-6  text-muted  ">
          <p style={{ fontSize: "19px" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p style={{ fontSize: "19px" }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p style={{ fontSize: "19px" }}>Playing basketball is his zen.</p>
          <p style={{ fontSize: "19px", textDecoration: "none" }}>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA{" "}
            </a>
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
