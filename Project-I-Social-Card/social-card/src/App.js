import React from "react";
import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
