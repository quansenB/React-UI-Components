import React from "react";

function Content() {
  return (
    <a href="https://www.reactjs.org" > 
    <div className="content">
      <CardBanner />
      </div>
    </a>
  );
}

function CardBanner() {
  return (
    <div className="bannerImgDiv">
      <img
        className="bannerImg"
        src=" https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"
        alt="reactImg"
      />
      <CardContent />
    </div>
  );
}

function CardContent() {
  return (
    <div className="cardContent">
      <CardHeadline />
      <CardText/>
      <CardLink/>
    </div>
  );
}

function CardHeadline(){
  return <div className="name">Get started with React</div>
}

function CardText(){
  return <div className="subtitle">Reactmakes it painless to create interactive UIs. Design simple views for each state in your application.</div>
}

function CardLink(){
  return <div className="tag subtitle">reactjs.org</div>
}

export default Content;
