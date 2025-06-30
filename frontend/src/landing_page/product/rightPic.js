import React from "react";

function RightPic({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <div className="col-6 p-5 ">
          <h1 className="mt-3">{productName} </h1>
          <p style={{ fontSize: "18px" }} className="text-muted mt-4">
            {productDescription}
          </p>
          <div className="mt-5">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More
            </a>
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
        <div className="col-6 ">
          <img className="" src={imageURL} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightPic;
