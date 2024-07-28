import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo-main.svg";
import { Poppins } from "next/font/google";

const poppinsSemiBold = Poppins({ weight: "600", subsets: ["latin"] });
const poppinsExtraBold = Poppins({ weight: "800", subsets: ["latin"] });

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-img">
        <Image src={Logo} fill alt="Logo" />
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
