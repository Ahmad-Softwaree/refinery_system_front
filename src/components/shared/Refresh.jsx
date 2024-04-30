import React from "react";

export default function Refresh({ setter }) {
  return (
    <span
      onClick={() => setter()}
      className="text-white-500 text-[20px] cursor-pointer">
      <i className="fa-solid fa-rotate-right"></i>{" "}
    </span>
  );
}
