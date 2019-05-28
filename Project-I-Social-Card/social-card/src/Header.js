import React from "react";

function Header() {
  return <div className="header">
    <ImageThumbnail/>
    <HeaderBox/>
  </div>;
}

function ImageThumbnail(){
  return <div className="img">
    <img className="img" src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt="lambda logo"/>
  </div>
}

function HeaderBox(){
  return <span className="headerBox">
    <Headline/>
    <Subtitle/>
  </span>
}

function Headline(){
 return <div className="headline">
   <Name/>
   <Tag/>
   <Date/>
 </div>
}

function Name(){
  return <span className="name">Lambda School</span>
}

function Tag(){
  return <span className="tag">@lambdaschool</span>
}

function Date(){
  return <span className="date">26 jan</span>
}

function Subtitle(){
  return <div className="subtitle">
    Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!
  </div>
}

export default Header;