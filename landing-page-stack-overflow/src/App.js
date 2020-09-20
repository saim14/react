import React from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import Business from "./Business/Business";
import Developer from "./Developer/Developer";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import HireSection from "./HireSection/HireSection";
import Job from "./LookingForJob/Job";
import PriceSection from "./PriceSection/PriceSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Developer />
      <Business />
      <PriceSection />
      <HireSection />
      <Job />
      <Footer />
    </div>
  );
}

export default App;
