import React from "react";

const Card = (props) => {
  console.log(props)
  return (
    <div className="relative h-[80%] w-60 overflow-hidden rounded-2xl flex">
      <img
        className="h-full w-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1686244745026-98fc15ad3400?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
        alt=""
      />
      <div className="h-full absolute top-0 left-0 w-80 bg-[#0604049f] flex flex-col justify-between p-5">
        <h1 className="rounded-full w-10 h-10 flex justify-center items-center bg-white">
          {props.cardData.cardId}
        </h1>
        <div>
          <p className="mb-13 text-white w-[70%]">
            {props.cardData.cardDesc}
          </p>
          <div className="flex justify-start relative w-full  ">
            <button className="py-3 px-9 bg-blue-300 rounded-full ">
              {props.cardData.cardButton}
            </button>
            <button className="py-3 px-4 rounded-full bg-blue-300 ms-4">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
