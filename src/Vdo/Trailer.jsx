import React from "react";

export default function Trailer(props) {
  return (
    <div className="bg-black flex justify-evenly items-center h-screen">
      <div>
        <h1 className="text-white mt-5 text-4xl">{props.title}</h1>
        <div className="text-white mt-2 flex flex-wrap text-1xl">
          {props.description}
        </div>
        <div>
          <button className="text-black w-6/12 rounded-lg bg-white px-2 py-2 mt-3 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
            Watch Now
          </button>
        </div>
      </div>
      <div>
        <img
          src={props.trailerData}
          alt="img"
          style={{
            width: "575px",
            height: "450px",
          }}
        />
      </div>
    </div>
  );
}
