import React from "react";
import Logo from "../asset/NFI-logo.png"

import { Web3Button } from "@web3modal/react";

import { useAccount } from "wagmi";

const Navbar = () => {
  const { isConnected, address } = useAccount();
  return (
    <div className="flex justify-between items-center w-full h-14 p-2 text-center bg-gray-400 text-xl text-gray-100">
      <div>
        <img src={Logo} alt='/' className=" bg-gray-400 w-14"/>
      </div>

      {isConnected && (
        <p className="hidden md:inline md:text-md text-center">
          Address: {address}
        </p>
      )}

      <div>
        <Web3Button />
      </div>
    </div>
  );
};

export default Navbar;
