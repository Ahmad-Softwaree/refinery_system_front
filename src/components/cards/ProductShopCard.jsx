import { CONTEXT_TYPEs } from "@/context";
import { UtilContext } from "@/context/UtilContext";
import { convertTimeStampToDate } from "@/lib/functions";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
const ProductShopCard = ({ val }) => {
  const [number, setNumber] = useState(0);
  const { dispatch } = useContext(UtilContext);
  const { customer_id } = useParams();

  return (
    <div
      className={`w-[300px] p-5 rounded-md bg-secondary-500 flex flex-col border-2 border-solid border-secondary-500 justify-start items-center gap-5 text-white h-fit ${
        parseInt(val.quantity) === 0 && "!border-red-500"
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
      <p className="w-full text-text1-semibold">type: {val.type}</p>
      <p className="w-full text-text1-semibold">discount: {val.discount}</p>
      <p className="w-full text-text1-semibold">price: ${val.price}</p>
      <p className="w-full text-text1-semibold">quantity: {val.quantity}</p>
      <p className="w-full text-text1-semibold">
        Expire Date: {convertTimeStampToDate(val.expire_date)}
      </p>

      {parseInt(val.quantity) != 0 ? (
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <div className="w-full flex flex-row justify-center items-center gap-3">
            <button
              onClick={() => setNumber(number + 1)}
              className="p-2 px-4 rounded-md bg-green-500 text-white">
              <i className="fa-solid fa-plus"></i>
            </button>
            <p>{number}</p>
            <button
              onClick={() =>
                setNumber((prev) => {
                  if (prev === 0) return 0;
                  else return prev - 1;
                })
              }
              className="p-2 px-4 rounded-md bg-red-500 text-white">
              <i className="fa-solid fa-minus"></i>
            </button>
          </div>

          <button
            onClick={() => {
              dispatch({
                type: CONTEXT_TYPEs.OPERATION,
                payload: {
                  data: {
                    pet_id: val.id,
                    customer_id,
                    quantity: number,
                  },
                  method: CONTEXT_TYPEs.BUY,
                },
              });
              setNumber(0);
            }}
            className="w-full p-2 px-4 rounded-md bg-tertiary-500 text-white">
            Buy
          </button>
        </div>
      ) : (
        <button
          disabled={true}
          className="w-full p-2 px-4 rounded-md bg-red-500 text-white">
          Out of stock
        </button>
      )}
    </div>
  );
};

export default ProductShopCard;
