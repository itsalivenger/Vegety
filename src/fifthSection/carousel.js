import "./carousel.scss";
import React, { useState, useEffect } from "react";
import RspImage from "../comps/rspImage";
import VButton from "../comps/Vbutton";





////////////////////////////////////////////////
// "Freshness you can taste in every aisle."
// "Where quality meets affordability."
// "Shop local, shop fresh."
// "Where the good stuff is always in stock."
// "The store with a heart for healthy living."
// "Your one-stop shop for fresh produce and more."
// "Where every day is a sale day."
// "Bringing you the world on a plate."
// "Where convenience meets variety."
// "Quality groceries at your fingertips."
// "Where community meets cuisine."
// "The freshest finds under one roof."
// "Where healthy choices are always in season."
// "The store that has it all."
// "Where shopping is always a pleasure."







// "Freshness you can taste in every aisle. At our grocery store, we pride ourselves on offering the freshest produce, meats, and baked goods. Our commitment to quality means that our customers can always count on finding the freshest ingredients for their meals."

// "Where quality meets affordability. At our store, we believe that everyone should have access to high-quality groceries, which is why we work hard to offer the best products at the most affordable prices. Shop with us and see the difference for yourself."

// "Shop local, shop fresh. At our store, we believe in supporting our local farmers and producers. That's why you'll find a wide selection of locally-sourced products on our shelves, from fresh produce to artisanal cheeses and more."

// "Where the good stuff is always in stock. At our store, we understand that you want the best for your family, which is why we stock only the highest-quality products. From organic produce to all-natural meats, we've got you covered."

// "The store with a heart for healthy living. At our store, we believe in the power of good nutrition. That's why we offer a wide selection of healthy, natural and organic products, as well as a knowledgeable staff to help you make informed choices."

// "Your one-stop shop for fresh produce and more. At our store, you'll find everything you need for your next meal. From fresh produce and meats to deli items and baked goods, we've got it all. Plus, with our convenient online ordering and delivery options, shopping has never been easier."

// "Where every day is a sale day. At our store, we believe that everyone should have access to affordable groceries. That's why we offer regular sales and discounts on a wide variety of products, so you can save money on the things you need most."

// "Bringing you the world on a plate. At our store, we pride ourselves on offering a wide selection of international products. From exotic spices and sauces to hard-to-find ingredients, we've got everything you need to create a truly authentic meal."

// "Where convenience meets variety. At our store, we understand that you're busy. That's why we offer a wide variety of products, online ordering and delivery options, as well as a convenient drive-thru service, so you can get the groceries you need without wasting time."

// "Quality groceries at your fingertips. At our store, we believe in making grocery shopping easy and convenient. That's why we offer online ordering and delivery, as well as a user-friendly mobile app, so you can shop for your favorite products at any time."

// "Where community meets cuisine. At our store, we believe in building strong connections with our customers. That's why we offer regular in-store events and cooking classes, as well as a wide selection of locally-sourced products, so you can discover new flavors and make new friends."

// "The freshest finds under one roof. At our store, we believe in offering the freshest products to our customers. That's why we source our produce, meats, and seafood from local farmers and producers, as well as regularly updating our selection to ensure that our customers always find the freshest products."

// "Where healthy choices are always in season. At our store, we believe in the power of good nutrition. That's why we offer a wide selection of natural and organic products, as well as a knowledgeable staff to help you make informed choices."
////////////////////////////////////////////////

const Slideshow = ({ slides }) => {
  const duration = 1000 * 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, duration);
    return () => clearTimeout(interval);
  }, [currentIndex, duration, slides.length]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentIndex ? "active" : ""} content`}>
          <RspImage
            src={slide}
          />
          <div className="backgroundDiv">
            <div className="title">
              <h4>"Freshness you can taste in every aisle."</h4>
            </div>
            <div className="description">
              Freshness you can taste in every aisle. At our grocery store, we
              pride ourselves on offering the freshest produce, and baked
              goods.
            </div>
            <div>
              <VButton content={"Order Now"} color={"primary"} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;