import React from "react";
function Hero() {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <img src="media/homeHero.png" alt="HeroImg" className="mb-5"></img>
        <h1 className="">Invest Anywhere</h1>
        <p>Online Platform to Invest in Derivatives ,Stocks & Mutul Funds</p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          SignUp
        </button>
      </div>
    </div>
  );
}

export default Hero;
