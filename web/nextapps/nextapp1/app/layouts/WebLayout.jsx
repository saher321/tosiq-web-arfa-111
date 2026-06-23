import React from "react";
import Navbar from "../components/Navbar";

const WebLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-6xl">{children}</div>
    </div>
  );
};

export default WebLayout;
