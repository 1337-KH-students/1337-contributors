import React, { FC } from "react";
import logo from "@assets/logo.svg";

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className="bg-gray-900 text-white font-Roboto">
        <div className="h-24 flex items-center justify-center ">
          <div className="relative" id="logo">
            <img src={logo} title="1337 Contributors" />
          </div>
        </div>
        <main className="text-white">{children}</main>
      </div>
    </>
  );
};

export default Layout;
