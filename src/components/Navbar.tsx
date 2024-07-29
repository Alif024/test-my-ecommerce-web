import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo-main.svg";
import BgMenu from "@/assets/bg-menu-nav.svg"
import MenuBtn from "@/assets/menu-nav.svg"
import { Poppins } from "next/font/google";

const poppinsSemiBold = Poppins({ weight: "600", subsets: ["latin"] });
const poppinsExtraBold = Poppins({ weight: "800", subsets: ["latin"] });

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-img">
        <Image src={Logo} fill alt="Logo" />
      </div>
      <div className="nav-mobile">
        <Image src={BgMenu} fill alt="bg menu" className="bg-menu-nav" />
        <Image src={MenuBtn} fill alt="bg menu" className="menu-nav-btn" />
      </div>
      <div className={`${poppinsSemiBold.className} nav-btns`}>
        <p className={`${poppinsExtraBold.className} active`}>Home</p>
        <p>Products</p>
        <p>Order</p>
        <p>Payment</p>
        <p>Account</p>
      </div>
    </div>
  );
}

export default Navbar;
