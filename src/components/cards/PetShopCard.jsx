import { UtilContext } from "@/context/UtilContext";
import React, { useContext } from "react";
import { CONTEXT_TYPEs } from "@/context";
import { useParams } from "react-router-dom";

const PetShopCard = ({ val }) => {
  const { dispatch } = useContext(UtilContext);
  const { customer_id } = useParams();
  return (
    <div
      className={`w-[300px] p-5 rounded-md bg-secondary-500 flex flex-col border-2 border-solid border-secondary-500 justify-start items-center gap-5 text-white h-fit ${
        val.adopted && "!border-red-500"
      }`}>
      {val.image_url ? (
        <div className="relative w-full h-[200px] object-cover">
          <img
            src={val.image_url}
            alt={val.image_name}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="relative w-full h-[200px] object-cover border border-solid border-primary-500"></div>
      )}
      <p className="w-full text-text1-semibold">name: {val.name}</p>
      <p className="w-full text-text1-semibold">breed: {val.breed}</p>
      <p className="w-full text-text1-semibold">color: {val.color}</p>
      <p className="w-full text-text1-semibold">price: ${val.price}</p>
      <p className="w-full text-text1-semibold">gender: {val.gender}</p>
      <p className="w-full text-text1-semibold">age: {val.age}</p>
      <p className="w-full text-text1-semibold">
        checked: {val.checked ? "Yes" : "No"}
      </p>
      <p className="w-full text-text1-semibold">
        adopted: {val.adopted ? "Yes" : "No"}
      </p>
      {val.checked ? (
        <>
          {!val.adopted ? (
            <button
              onClick={() =>
                dispatch({
                  type: CONTEXT_TYPEs.OPERATION,
                  payload: {
                    data: {
                      pet_id: val.id,
                      customer_id,
                    },
                    method: CONTEXT_TYPEs.ADOPT,
                  },
                })
              }
              className="w-full p-2 px-4 rounded-md bg-tertiary-500 text-white">
              Adopt
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({
                  type: CONTEXT_TYPEs.OPERATION,
                  payload: {
                    data: {
                      pet_id: val.id,
                      customer_id,
                    },
                    method: CONTEXT_TYPEs.ADOPT,
                  },
                })
              }
              className="w-full p-2 px-4 rounded-md bg-red-500 text-white">
              Abandon
            </button>
          )}
        </>
      ) : (
        <button
          disabled={true}
          className="w-full p-2 px-4 rounded-md bg-red-500 text-white">
          Not Checked Yet
        </button>
      )}
    </div>
  );
};

export default PetShopCard;
