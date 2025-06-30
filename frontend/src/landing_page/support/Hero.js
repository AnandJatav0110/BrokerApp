import React from "react";

function Hero() {
  return (
    <section className="container-fluid  " id="supportHero">
      <div className="p-5  " id="supportWrapper">
        <h4 className="">Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      <div className="row p-5  mb-5 ">
        <div className="col-6 p-4   ">
          <h3 className="">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <br />
          <input placeholder="Eg.. How to I Avtivate F&O" />
          <br />
          <ul>
            <li>
              <a href="">Track account opening</a>
            </li>
            <li>
              <a href="">Track segment activation</a>
            </li>
            <li>
              <a href="">Intraday margins</a>
            </li>
            <li>
              <a href="">Kite user manual</a>
            </li>
          </ul>
        </div>
        <div className="col-6 p-4 ml-5  ">
          <h3 className="">Featured</h3>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
