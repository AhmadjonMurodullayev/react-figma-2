import React, { Component } from "react";
import Header from "./Component/header";
import Home from "./Component/home";
import Footer from "./Component/Footer/footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home/>
        <Footer/>
      </div>
    );
  }
}
