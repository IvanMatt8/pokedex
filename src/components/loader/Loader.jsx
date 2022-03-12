import React from "react";
import "./Loader.css";

function Loarder({ className }) {
  return <div className={["loader", className].join(" ")}></div>;
}

export default Loarder;
