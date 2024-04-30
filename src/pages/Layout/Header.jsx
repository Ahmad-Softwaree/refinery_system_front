import Logo from "@/components/shared/Logo";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    state: { user },
  } = useContext(AuthContext);
  return (
    <header className="w-full p-5 bg-tertiary-500 text-white flex flex-row justify-between gap-10 items-center">
      <Logo size="md" />
      <Link
        to={`/profile`}
        className="flex flex-row justify-center items-center gap-3">
        <div className="relative w-[50px] h-[50px]">
          <img
            className="rounded-full object-cover w-full h-full"
            src={`/images/${user?.gender === "male" ? "profile" : "woman"}.png`}
            alt="profile"
          />
        </div>
        <span className="hidden md:flex text-text1-light md:text-body1-semibold text-primary-500">
          {user?.name}
        </span>
      </Link>
    </header>
  );
};

export default Header;
