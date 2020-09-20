import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/LittleFiresEverywhere/LITT_S1_Xsite_FT_HeroTALL_1500x600_PV_en-GB._CB431647716_.jpg"
          className="home__containerImage"
        />

        <div className="home__row">
          <Product
            id="22762371"
            title="Lamaze Peek-A-Boo Forest, Fun Interactive Baby Book with Inspiring Rhymes and Stories"
            price="12"
            image="https://images-na.ssl-images-amazon.com/images/I/91xxqc9IwcL._SL1500_.jpg"
            rating={5}
          />

          <Product
            id="227342371"
            title="Super Soft Silicone Face Cleanser and Massager Brush Manual Facial Cleansing Brush Handheld Mat Scrubber For Sensitive, Delicate, Dry Skin (4pcs set)"
            price="20.8"
            image="https://images-na.ssl-images-amazon.com/images/I/61taL4OCkBL._SL1000_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="24262371"
            title="The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers"
            price="17"
            image="https://images-na.ssl-images-amazon.com/images/I/51slqM2g3jL.jpg"
            rating={4}
          />
          <Product
            id="2362371"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price="29.9"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />

          <Product
            id="226542371"
            title="Sapiens/Homo Deus box set Hardcover – October 24, 2017"
            price="75"
            image="https://images-na.ssl-images-amazon.com/images/I/71PaI1Sn+ZL.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="22764571"
            title="SKYWORTH E20 Series 40-Inch Smart TV | Voice Remote with Google Assistant - Android Operating System | 1mm Thin Bezel - 1080P - LED - A53 - Quad-Core | 40E20 model"
            price="219"
            image="https://images-na.ssl-images-amazon.com/images/I/71RoyyjeB9L._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
