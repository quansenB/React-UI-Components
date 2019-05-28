import React from "react";

function Content() {
  return (
    <div href="https://www.reactjs.org" className="content">
      <CardBanner />
      <CardContent />
    </div>
  );
}

function CardBanner() {
  return <div className="bannerImgDiv">
    <img className="bannerImg" src=" https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" alt="reactImg"/>
  </div>
}

function CardContent(){
  return ""
}

export default Content;
