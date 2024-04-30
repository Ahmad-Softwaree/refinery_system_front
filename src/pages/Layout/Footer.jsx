import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-tertiary-500 text-white p-3 flex flex-row justify-center items-center">
      <p>
        Pet Shop All Rights reversed
        <span className="mx-2">
          <i className="fa-solid fa-copyright"></i>
        </span>
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
