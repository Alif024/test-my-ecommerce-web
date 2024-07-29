import React from "react";
import Image from "next/image";
import BurgerImg from "@/assets/Burger.svg";
import TimeReadyIn from "@/assets/time-readyin.svg";
import Delivery from "@/assets/car-delivery.svg";
import { Poppins } from "next/font/google";

const poppinsSemiBold = Poppins({ weight: "600", subsets: ["latin"] });
const poppinsExtraBold = Poppins({ weight: "800", subsets: ["latin"] });

function Hero() {
  return (
    <div className="hero-section">
      <div className="detail-product-hero">
        <div className="info">
          <div className="text">
            <h2 className={`${poppinsSemiBold.className}`}>Top Rating</h2>
            <h1 className={`${poppinsExtraBold.className}`}>QUALITY BEEF FILLET</h1>
            <p>
              Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at
              felislaciniaaptent taciti sociosqu ad litora torquent per conubia
              nostra
            </p>
          </div>
          <div className="time-orders">
            <div className="readyin">
              <Image
                src={TimeReadyIn}
                priority
                alt="Time ready in"
                className="icon"
              />
              <div className="time-contents">
                <h4 className={`${poppinsSemiBold.className}`}>Ready in</h4>
                <h5>5 Minutes</h5>
              </div>
            </div>
            <div className="delivery">
              <Image
                src={Delivery}
                priority
                alt="Time delivery"
                className="icon"
              />
              <div className="time-contents">
                <h4 className={`${poppinsSemiBold.className}`}>Delivery Available</h4>
                <h5>20+ Minutes</h5>
              </div>
            </div>
          </div>
          <div className="btns">
            <button className={`${poppinsSemiBold.className} buy-now`}>Buy Now</button>
            <button className={`${poppinsSemiBold.className} see-more`}>See More</button>
          </div>
        </div>
      </div>
      <Image src={BurgerImg} alt="burger" className="burger-hero-img" />
    </div>
  );
}

export default Hero;
