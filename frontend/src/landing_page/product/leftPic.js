import React from "react";

function LeftPic({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <div className="col-6 ">
          <img className="" src={imageURL} style={{ width: "100%" }} />
        </div>
        <div className="col-6 p-5 mt">
          <h1>{productName} </h1>
          <p style={{ fontSize: "18px" }} className="text-muted">
            {productDescription}
          </p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "145px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-5">
            <a href={googlePlay}>
              <img src="/media/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "70px" }}>
              <img src="/media/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPic;
