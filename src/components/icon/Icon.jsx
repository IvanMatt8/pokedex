import React from "react";
import "./Icon.css";

export const IconName = {
  heartLike: "❤️",
  heartUnLike: "🖤",
};

function Icon({ className, onClick, iconName }) {
  return (
    <button onClick={onClick} className={[`iconWrap`, className].join(" ")}>
      {iconName}
    </button>
  );
}

export default Icon;
