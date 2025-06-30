import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4  p-5">
          <img className="" src="media/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4  p-5">
          <img
            className=""
            src="media/streakLogo.png"
            style={{ width: "55%" }}
          />
          <p className="text-small text-muted">Algo & Strategic platform</p>
        </div>
        <div className="col-4  p-5">
          <img
            className=""
            src="media/sensibullLogo.svg"
            style={{ width: "90%" }}
          />
          <p className="text-small text-muted">Options Trading platform</p>
        </div>
        <div className="col-4  mt-3">
          <img
            className=""
            src="media/zerodhaFundhouse.png"
            style={{ width: "55%" }}
          />
          <p className="text-small text-muted">Assest Managment platform</p>
        </div>
        <div className="col-4  mt-3">
          <img className="" src="media/goldenpiLogo.png" />
          <p className="text-small text-muted">Bonds Trading platform</p>
        </div>
        <div className="col-4  mt-3">
          <img
            className=""
            src="media/dittoLogo.png"
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: " auto" }}
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
