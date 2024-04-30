import { homeParts } from "@/constants";
import { AuthContext } from "@/context/AuthContext";
import { useGetConfig } from "@/react-query/query/config.query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    state: { user },
  } = useContext(AuthContext);

  const { data, isPending } = useGetConfig();
  return (
    <div className="w-full flex flex-col justify-center items-center  p-5 h-full gap-5 py-30">
      <h1 className="w-full text-center mb-5 text-sub-heading1-bold">
        $ {data?.money}
      </h1>
      <div className="w-full flex flex-row justify-center items-center gap-10 flex-wrap">
        {homeParts.map((val, index) => {
          return (
            val.role.includes(user.role) && (
              <Link
                className="w-[300px] rounded-md p-5 bg-secondary-500 flex flex-row justify-between items-center "
                to={val.link}
                key={index}>
                <h1 className="text-tertiary-500 text-body1-semibold">
                  {val.text}
                </h1>
                <div className="relative w-[80px]">
                  <img src={val.image} alt={val.text} />
                </div>
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Home;
